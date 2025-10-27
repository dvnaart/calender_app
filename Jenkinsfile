pipeline {
    agent any

    environment {
        IMAGENAME = 'devinaputri/calender_app'
        REGISTRY = ''  // <--- INI BARIS YANG HILANG. HARUS DITAMBAHKAN
        REGISTRY_CREDENTIALS = 'dockerhub-credentials'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building Docker image...'
                    def image = docker.build("${IMAGENAME}:${env.BUILD_NUMBER}")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    echo 'Pushing Docker image to Docker Hub...'
                    docker.withRegistry("${REGISTRY}", "${REGISTRY_CREDENTIALS}") { 
                        def image = docker.image("${IMAGENAME}:${env.BUILD_NUMBER}")
                        image.push()
                        image.push('latest')
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline finished successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
        always {
            cleanWs()
        }
    }
}
