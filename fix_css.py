#!/usr/bin/env python3
import re

# 读取文件内容
with open('/Users/tantantan/space/qingzang/niche-voyage/src/views/history/horizontal/jindai/index.vue', 'r') as f:
    content = f.read()

# 提取CSS部分
css_match = re.search(r'<style scoped>(.*?)</style>', content, re.DOTALL)
if css_match:
    css_content = css_match.group(1)
    
    # 将嵌套的CSS选择器展开为标准的CSS语法
    lines = css_content.split('\n')
    new_css_lines = []
    selector_stack = []
    
    for line in lines:
        stripped_line = line.strip()
        if not stripped_line or stripped_line.startswith('//'):
            new_css_lines.append(line)
            continue
        
        # 处理左大括号
        if stripped_line.endswith('{'):
            selector = stripped_line[:-1].strip()
            
            if selector.startswith('.') or selector.startswith('#'):
                # 嵌套选择器
                if selector_stack:
                    full_selector = f"{selector_stack[-1]} {selector}"
                else:
                    full_selector = selector
                selector_stack.append(full_selector)
                new_css_lines.append(f"{full_selector} {{")
            else:
                # 非嵌套选择器（如@keyframes）
                selector_stack.append(selector)
                new_css_lines.append(line)
        
        # 处理右大括号
        elif stripped_line == '}':
            if selector_stack:
                selector_stack.pop()
            new_css_lines.append(line)
        
        # 处理CSS属性
        else:
            if ':' in stripped_line and not stripped_line.endswith(';'):
                # 确保属性以分号结尾
                new_css_lines.append(f"{line.rstrip()};\n")
            else:
                new_css_lines.append(line)
    
    # 重新构建CSS内容
    new_css_content = '\n'.join(new_css_lines)
    
    # 替换原始文件中的CSS部分
    new_content = re.sub(r'<style scoped>(.*?)</style>', f'<style scoped>{new_css_content}</style>', content, flags=re.DOTALL)
    
    # 写入修复后的文件
    with open('/Users/tantantan/space/qingzang/niche-voyage/src/views/history/horizontal/jindai/index.vue', 'w') as f:
        f.write(new_content)
    
    print('CSS部分已修复！')
else:
    print('未找到CSS部分')
