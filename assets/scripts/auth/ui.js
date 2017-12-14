'use strict'
const store = require('../store')

// display message on sign up success
const signUpSuccess = function (data) {
  console.log(data)
  console.log('sign up success')
  $('#sign-message').text('You signed-up successfully!')
}

// display message on sign up failure
const signUpFailure = function () {
  console.log('sign up fail')
  $('#sign-message').text('Please enter a valid email address and matching passwords')
}

// display message on sign in success
const signInSuccess = function (data) {
  console.log('sign in success')
  store.user = data.user
  console.log(store.data)
  $('#sign-message').text('You have signed in successfully')
}

// display message on sign in failure
const signInFailure = function () {
  console.log('sign in fail')
  $('#sign-message').text('Error on sign in')
}

// display message on sign out success
// hide main div and show sign-in/up form
const signOutSuccess = function () {
  console.log('sign out success')
  $('#sign-message').text('You have signed out successfully')
}

// display message on sign out failure
const signOutFailure = function () {
  console.log('sign out fail')
  $('#sign-message').text('Error signing out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
