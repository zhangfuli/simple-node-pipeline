pipeline{
	agent any
	stages{
		stage('info'){
			steps{
				sh 'node --version'
				sh 'npm --version'
			}
		}
		stage('npm install'){
			steps{
				echo 'run'
				sh 'npm install'
			}
		}
		stage('build docker image'){
			steps{
				sh 'docker build -t zhangfuli/node-pipeline-test:latest ./'
			}
		}
		stage('push image'){
			steps{
				sh 'docker login -u username -p password'
				sh 'docker push zhangfuli/node-pipeline-test:latest'
			}
		}
	}
}