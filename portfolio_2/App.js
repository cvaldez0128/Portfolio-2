import React from 'react';
import { useState, useRef } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Todo from './components/todo';

const USER = "cvaldez2218"


function LoginApp () {

    let logout = () => {
    setLoggedIn(false)
  }
            return (
              
                <>
                    <Text 
                        style={styles.text}>
                        <h1>Welcome, {USER}!</h1>
                    </Text>
                    <Button 
                        onPress={logout}
                        title="Log Out"
                    ></Button>
                
                </>
              
            )
}

export default function doLogin() {

  

  let [loggedIn,setLoggedIn] = useState(false)
  let passRef = useRef(null)
  let userRef = useRef(null)
  

  
  let login = () => {
    if (passRef.current.value == "Ch@rge!") {
      setLoggedIn(true)
      console.log("Password accecpted")
    } else {
      console.log("Password is incorrect")
      document.getElementById("error").innerHTML = ("WRONG PASSWORD! TRY AGAIN.")
    }
  }


  
  return (
    <>
        {loggedIn ?
      
          
          <LoginApp></LoginApp> :
      
        undefined}

       

          <View style={[styles.container, styles.body]}>
              
              
              
              {

                !loggedIn ?
                <>
               
                    <Text style={styles.text}>
                      <h1>WELCOME, PLEASE LOG IN BELOW</h1>
                    </Text>
                   
                    <TextInput
                    style={styles.textInput}
                    ref={userRef}
                    placeholder="Username"
                    ></TextInput>
                    
                   
                        <TextInput
                        style={styles.textInput}
                        ref={passRef}
                        placeholder="Password"
                        secureTextEntry={true}
                        ></TextInput>
                      <Button 
                        onPress={login}
                        title="Login">
                      </Button>
                      
                      <br></br>
                     
                      <Text 
                      style={styles.errorMessage}>
                      <p id="error"></p>
                      </Text>

                      

                      </> : undefined}

            </View>
          </>
    )
    
  }
        
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aquamarine",
    alignItems: 'center',
    
  },
  text: {
    fontFamily: "Artico Light",
    textAlign: "center",
  },
  body: {
    backgroundColor: "aquamarine",
    borderWidth: 15,
  },
  textInput: {
    height: 40,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
  },
  errorMessage: {
    height: 15,
    paddingLeft: 12,
    color: "red",
    fontSize: ".75rem",
    fontFamily: "Artico Light",
  },
  error: {
    fontFamily: "Artico Light",
  }
});