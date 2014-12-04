import json
# Unique_key, department_name, term, year, gre_quant, gre_verbal, gre_awa, toefl, undergrad_gpa
if __name__ == '__main__':
	with open('uni_training.json') as f:
		data = json.load(f)
	universities = {}
	for university in data:
		admit = data[university]['admit']
		years = {}
		for individual in admit:
			tmp = {}
			tmp['id'] = individual[0]
			tmp['department'] = individual[1]
			tmp['term'] = individual[2]
			tmp['year'] = individual[3]
			tmp['gre_quant'] = individual[4]
			tmp['gre_verbal'] = individual[5]
			tmp['gre_awa'] = individual[6]
			tmp['toefl'] = individual[7]
			tmp['gpa'] = individual[8]
			if years.get(individual[3]):
				years[individual[3]].append(tmp)
			else:
				years[individual[3]] = [tmp]
		universities[university.split('/')[0].title()] = years 
	with open('data_by_year.json', 'w') as f:
		json.dump(universities, f)
	print json.dumps(sorted(universities.keys()))


