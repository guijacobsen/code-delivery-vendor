pipeline {
    agent any

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