import json

if __name__ == '__main__':
	result = {}
	for i in range(0, 101, 10):
		with open('prediciton_data/output_' + str(i)) as f:
			data = f.readlines()[0]
			universities = eval(data)
			admit = []
			reject = []
			for university in universities:
				if universities[university] == 1:
					admit.append(university)
				else:
					reject.append(university)
			result[i] = {}
			result[i]['admin'] = admit
	with open('data_by_prediction.json', 'w') as fp:
			json.dump(result, fp)		
