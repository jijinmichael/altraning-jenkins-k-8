pipeline {

  environment {
    dockerimagename = "jijinmichael/nodejs-webapp"
    dockerImage = ""
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git 'https://github.com/jijinmichael/altraning-jenkins-k-8.git'
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
