import json
# Unique_key, department_name, term, year, gre_quant, gre_verbal, gre_awa, toefl, undergrad_gpa
def process_data(data, index):
	result = {}
	for individual in data:
		score = int(individual[index])
		if index != 6:
			tmp = score / 5 * 5
		else:
			tmp = score
			
		if result.get(score):
			result[tmp] += 1
		else:
			result[tmp] = 1
	return result 

if __name__ == '__main__':
	metrics = {'gre_quant': 4, 'gre_verbal': 5, 'gre_awa': 6, 'toefl': 7, 'undergrad_gpa': 8}
	with open('uni_training.json') as f:
		data = json.load(f)
	universities = {}
	for university in data:
		admit = data[university]['admit']
		reject = data[university]['reject']
		tmp = {}
		for metric in metrics:
			tmp[metric] = {}
			tmp[metric]['admit'] = process_data(admit, metrics[metric])
			tmp[metric]['reject'] = process_data(reject, metrics[metric])
		universities[university.split('/')[0].title()] = tmp 
	with open('data_by_admit.json', 'w') as f:
		json.dump(universities, f)
