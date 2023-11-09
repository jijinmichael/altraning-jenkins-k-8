pipeline {

  environment {
        registry = "https://hub.docker.com/"
        imageName = "jijinmichael/nodejs-webapp"
        imageTag = "latest"
        registryCredential = 'docker'

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git 'https://github.com/jijinmichael/altraning-jenkins-k-8.git'
      }
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Build the Docker image
                    docker.build("${registry}/${imageName}:${imageTag}")
                }
            }
        }

    stage('Deploying NodeJs container to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "deployment.yaml", "service.yaml", "kubeconfigId: "kubernetes")
        }
      }
    }

  }

}
