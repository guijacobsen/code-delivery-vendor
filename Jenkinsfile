pipeline {
    agent any

    tools { nodejs "nodejs" }

    stages {

        stage('Build Image') {
            steps {
                script {
                    sh '''
                        npm ci
                        npm run build
                    '''

                }
            }
        }
        stage('Tests') {
            steps {
                script {
                    sh '''
                        npm run test
                    '''

                }
            }
        }

    }
}