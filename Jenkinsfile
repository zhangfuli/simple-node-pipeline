pipeline{
	agent any
	stages{
		stage('info'){
			steps{
				sh 'node --version'
				sh 'npm --version'
			}
		}
		stage('run'){
			steps{
				echo 'run'
				sh 'node ./index.js'
			}
		}
	}
}