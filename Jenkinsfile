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
			sh 'docker build -t zhangfuli/node-pipeline-test:latest ./'
		}
	}
}