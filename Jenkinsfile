#!/groovy
pipeline{
	agent any

	environment {
		REPOSITORY="https://github.com/zhangfuli/simple-node-pipeline.git"
		SERVICE_DIR="dop-web"
		DOCKER_REGISTRY_HOST="registry.dop.clsaa.com"
		DOCKER_REGISTRY="registry.dop.clsaa.com/zfl/simple-node-test"
	}

	stages {
		stage('获取代码') {
			steps {
				echo "start fetch code from git:${REPOSITORY}"
				deleteDir()
				git "${REPOSITORY}"
                script {
                    time = sh(returnStdout: true, script: 'date "+%Y%m%d%H%M"').trim()
                    git_version = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%h"').trim()
                    build_tag = time+git_version
                }
			}
		}

		stage('npm install') {
			steps {
                sh "ls -l"
                sh "npm install"
			}
		}

		stage('构建镜像') {
			steps {
                echo "start build image"
                echo "image tag : ${build_tag}"
                sh "ls -l"
                sh "docker build -t ${DOCKER_REGISTRY}:${build_tag} ./"

			}
		}

       stage('推送镜像') {
            steps {
                echo "start push image"
                dir(SERVICE_DIR){
                  sh "ls -l"
                  withCredentials([usernamePassword(credentialsId: 'zfl_docker_registry', passwordVariable: 'password', usernameVariable: 'username')]) {
                      sh "docker login -u ${username} -p ${password} ${DOCKER_REGISTRY_HOST}"
                      sh "docker push ${DOCKER_REGISTRY}:${build_tag}"
                  }
                }
            }
        }

        stage('更新YAML镜像版本') {
            steps{
                echo "start change yaml image tag"
                sh "ls -l"
                sh "sed -i 's/<BUILD_TAG>/${build_tag}/' k8s.yaml"
                sh "cat k8s.yaml"

            }
        }

		stage('发布系统') {
			steps {
				echo "start deploy"
		        sh "ls -l"
				sh "kubectl apply -f k8s.yaml"

			}
		}
	}
}
