pipeline {

  agent { label 'master' }
  tools {nodejs "egress-v12"}

  options {

    disableConcurrentBuilds()
    timeout(time: 10, unit: 'MINUTES')
    buildDiscarder(logRotator(numToKeepStr: '10'))

  } // options

  parameters {

    string(name: 'SLACK_CHANNEL_2',
           description: 'Default Slack channel to send messages to',
           defaultValue: '#lips')           

  } // parameters

  environment {

    // Slack configuration
    SLACK_COLOR_DANGER  = '#E01563'
    SLACK_COLOR_INFO    = '#6ECADC'
    SLACK_COLOR_WARNING = '#FFC300'
    SLACK_COLOR_GOOD    = '#3EB991'

  } // environment

  stages {
 
    stage("Deliver for staging") { 
        when {
                branch 'staging'
            }
      steps {
        script {
          //enable remote triggers
          properties([pipelineTriggers([pollSCM('* * * * *')])])
    
        }
      }
    }
    stage("Deliver for master") { 
        when {
                branch 'master'
            }
      steps {
        script {
          //enable remote triggers
          properties([pipelineTriggers([pollSCM('* * * * *')])])
          sh 'npm install'
          sh 'npm run build'
          sh '/usr/local/bin/aws s3 sync ./build/ s3://stage-lips.bitcotapps.com --profile ss'
          sh '/usr/local/bin/aws cloudfront create-invalidation --distribution-id EGZY1LSOMFUIM --paths "/*" --profile ss'


        }
      }
    }
  }

  post {

    aborted {

      echo "Sending message to Slack"
      slackSend (color: "${env.SLACK_COLOR_WARNING}",
                 channel: "${params.SLACK_CHANNEL_2}",
                 message: "*ABORTED:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${env.USER_ID}")
    } // aborted

    failure {

      echo "Sending message to Slack"
      slackSend (color: "${env.SLACK_COLOR_DANGER}",
                 channel: "${params.SLACK_CHANNEL_2}",
                 message: "*FAILED:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${env.USER_ID}")
    } // failure

    success {
      echo "Sending message to Slack"
      slackSend (color: "${env.SLACK_COLOR_GOOD}",
                 channel: "${params.SLACK_CHANNEL_2}",
                 message: "*SUCCESS:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${env.USER_ID}")
    } // success

  } // post
} // pipeline