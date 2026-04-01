import os
import glob
import json
import re

files = glob.glob('d:/mcq/*_mcq.txt')
quiz_data = {}

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Parse subject
    subject_match = re.search(r'Subject:\s*(.*)', content)
    if not subject_match:
        continue
    subject = subject_match.group(1).strip()
    
    questions = []
    blocks = content.split('\nQ')
    if len(blocks) == 1:
        blocks = content.split('\n\nQ') # in case of double newlines
    
    # Check if lines have multiple Qs
    blocks = re.split(r'\bQ\d+\.', content)

    for block in blocks[1:]:
        lines = [line.strip() for line in block.strip().split('\n') if line.strip()]
        if len(lines) < 3:
            continue
        
        q_text = lines[0].strip()
        
        # the options might be on one line or multiple lines
        # let's collate all lines between question text and Ans
        opt_text = " ".join(lines[1:-1])
        ans_line = lines[-1]
        
        # Extract options using regex
        opt_matches = list(re.finditer(r'([a-d])\)\s*(.*?)(?=(?:[a-d]\))|$)', opt_text))
        options = {}
        for m in opt_matches:
            options[m.group(1)] = m.group(2).strip()
            
        if not options:
            continue
            
        ans_match = re.search(r'Ans:\s*([a-d])', ans_line, re.IGNORECASE)
        ans = ans_match.group(1).lower() if ans_match else 'a'
            
        questions.append({
            'question': q_text,
            'options': options,
            'answer': ans
        })
        
    if questions:
        quiz_data[subject] = questions

with open('d:/mcq/questions.js', 'w', encoding='utf-8') as f:
    f.write('const quizData = ' + json.dumps(quiz_data, indent=4) + ';')

print("Parsed texts and generated questions.js with %d subjects!" % len(quiz_data))
