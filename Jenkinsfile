pipeline {

  environment {
    dockerimagename = "jijinmichael/nodejs-webapp:latest"
    dockerImage = ""
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git 'https://github.com/jijinmichael/altraning-jenkins-k-8.git'
      }
    }

    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }

    stage('Pushing Image') {
      environment {
               registryCredential = 'docker'
           }
      steps{
        script {
          docker.withRegistry( 'https://hub.docker.com/', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }

    stage('Deploying NodeJs container to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "deployment.yaml", "service.yaml")
        }
      }
    }

  }

}
