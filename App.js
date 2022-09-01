import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {useState} from "react";
import { StyleSheet, Text, View , Button, ImageBackground, TouchableOpacity, Image, TextInput,SafeAreaView,ScrollView, Linking} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from "@react-native-picker/picker";

const Images = {uri:"https://wallpaperaccess.com/full/1567834.jpg"};
const thunder = {uri: "https://toppng.com/uploads/preview/lightning-logo-vector-royalty-free-library-lightning-logo-11563248931oz6voj6dp4.png", width:25, height:25 };
const password = {uri:"https://cdn1.vectorstock.com/i/1000x1000/28/35/password-protection-icon-flat-design-vector-7562835.jpg",width:24, height:24};
const fullname={uri:"https://th.bing.com/th/id/OIP.6tTlAPJiEUR_K4Oo_ts1tQHaHa?pid=ImgDet&rs=1",width:25, height:25 };
const email = {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDjYlG_eYYOVM-7ev8JZp25gwMLnbLDQ1MVOCCdpCijwk-Npt8An-6F4X47Pftlf5Nqg&usqp=CAU",width:25, height:25};
const back = {uri:"https://th.bing.com/th/id/R.fdda5ba97b84e3f79db2bc7b9854d393?rik=awCDCEV8vvcjPw&pid=ImgRaw&r=0&sres=1&sresct=1"}
function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={Images} style={{flex:1, justifyContent:'center',}}>
        <View style={{}}>
          <View style={{flexDirection:'row', justifyContent:'center',marginRight:15}}>
            <View>
            <Ionicons name='flash-outline' size={40}></Ionicons>
            </View>
            <Text style={{fontSize:55,
            textAlign:'center',
            textShadowColor:'#1A1513',
            textShadowOffset:{
              height:1,
              width:1
            },
            textShadowRadius:1,
            marginBottom:30
            
            }}>Finder</Text>
            
          </View>

          <View style={{backgroundColor:'rgba(230, 230, 255,0.4)', paddingBottom:70, margin:10, elevation:3, borderRadius:15, borderWidth:3}}>
          <View style={styles.inputcontainer}>
            <Text style={{fontSize:30, textAlign:'center', marginRight:100, marginBottom:15, marginLeft:20}}>Login</Text>
            <View style={styles.items}>
              <Image source={fullname} style={{marginRight:5}}/>
              <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', width:200, height:50, paddingLeft:10,  borderRadius:10,}} placeholder='Email'></TextInput>
            </View>
            <View style={styles.items}>
              <Image source={password} style={{marginRight:5}}/>
              <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', marginRight:10, width:200, height:50, paddingLeft:10, borderRadius:10,}} placeholder='Password'></TextInput>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.signandlog}
              onPress={()=>navigation.navigate('Dashboard')}>
              <Text style={{color:'#ffffff'}}>Log In</Text>
            </TouchableOpacity>

            <View style={{alignItems:'center', flexDirection:'row', marginLeft:130, paddingTop:30}}>
            <Text >Forgot password? </Text>
            <TouchableOpacity style={styles.opacity} onPress={()=>navigation.navigate('Reset')}>
                <Text style={{fontSize:15, color:'#1A1513', fontWeight:'bold'}}> Reset</Text>
              </TouchableOpacity>
            </View>


          </View>
          </View>
        </View>
        <View  style={styles.dont}>
          <Text >Don't have an account? 
            
          </Text>
          <TouchableOpacity style={styles.opacity} onPress={()=>navigation.navigate('New User Sign In')}>
              <Text style={{fontSize:15, color:'#1A1513', fontWeight:'bold'}}> Sign In</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

//_________________________________________________________________________________________________________________________________________

function Resetpw({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={Images} style={{flex:1, justifyContent:'center',}}>
        <View style={{}}>
          <View style={{flexDirection:'row', justifyContent:'center',marginRight:15}}>
            <View>
            <Ionicons name='flash-outline' size={40}></Ionicons>
            </View>
            <Text style={{fontSize:55,
            textAlign:'center',
            textShadowColor:'#1A1513',
            textShadowOffset:{
              height:1,
              width:1
            },
            textShadowRadius:1,
            marginBottom:30
            
            }}>Finder</Text>
            
          </View>

          <View style={{backgroundColor:'rgba(230, 230, 255,0.4)', paddingBottom:70, margin:10, elevation:3, borderRadius:15, borderWidth:3}}>
          <View style={styles.inputcontainer}>
            <Text style={{fontSize:30, textAlign:'center', marginRight:100, marginBottom:15, marginLeft:20}}>Reset Password</Text>
            <View style={styles.items}>
              <Image source={fullname} style={{marginRight:5}}/>
              <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', width:200, height:50, paddingLeft:10,  borderRadius:10,}} placeholder='Email'></TextInput>
            </View>
            <View style={styles.items}>
              <Image source={password} style={{marginRight:5}}/>
              <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', marginRight:10, width:200, height:50, paddingLeft:10, borderRadius:10,}} placeholder='New Password'></TextInput>
            </View>
            <View style={styles.items}>
              <Image source={password} style={{marginRight:5}}/>
              <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', marginRight:10, width:200, height:50, paddingLeft:10, borderRadius:10,}} placeholder='Confirm PW'></TextInput>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.signandlog}
              onPress={()=>navigation.navigate('User Log In')}>
              <Text style={{color:'#ffffff'}}>Reset</Text>
            </TouchableOpacity>

            
            

          </View>

          <View style={{alignItems:'center', flexDirection:'row', marginLeft:130, paddingTop:30}}>
            <Text >Back to login? </Text>
            <TouchableOpacity style={styles.opacity} onPress={()=>navigation.navigate('User Log In')}>
                <Text style={{fontSize:15, color:'#1A1513', fontWeight:'bold'}}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View  style={styles.dont}>
          <Text >Don't have an account? 
            
          </Text>
          <TouchableOpacity style={styles.opacity} onPress={()=>navigation.navigate('New User Sign In')}>
              <Text style={{fontSize:15, color:'#1A1513', fontWeight:'bold'}}> Sign In</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}


//********************************************************************************************************************************************



function SignInScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={Images} style={{flex:1, justifyContent:'center'}}>
      <Text style={{fontSize:35,
            textAlign:'center',
            textShadowColor:'#ffffff',
            textShadowOffset:{
              height:1,
              width:1
            },
            textShadowRadius:1,
            marginTop:30
            
            }}>Welcome To Finder</Text>
            <Text
            style={{textAlign:'center',
            fontSize:20,
            paddingTop:50,
            }}
            >Provide your details below.....</Text>
        <View style={{backgroundColor:'rgba(230, 230, 255,0.4)', paddingBottom:70, margin:10, elevation:3, borderRadius:15, borderWidth:3}}>
          <View style={styles.inputcontainer}>
              <View style={styles.items}>
                <Image source={fullname} style={{marginRight:5}}/>
                <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', width:200, height:50, paddingLeft:10,  borderRadius:10,}} placeholder='Full Name'></TextInput>
              </View>
              <View style={styles.items}>
                <Image source={email} style={{marginRight:5}}/>
                <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', marginRight:10, width:200, height:50, paddingLeft:10, borderRadius:10,}} placeholder='Email'></TextInput>
              </View>
              <View style={styles.items}>
                <Image source={fullname} style={{marginRight:5}}/>
                <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', marginRight:10, width:200, height:50, paddingLeft:10, borderRadius:10,}} placeholder='User Name'></TextInput>
              </View>
              <View style={styles.items}>
                <Image source={password} style={{marginRight:5}}/>
                <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', marginRight:10, width:200, height:50, paddingLeft:10, borderRadius:10,}} placeholder='Password'></TextInput>
              </View>
              <View style={styles.items}>
                <Image source={password} style={{marginRight:5}}/>
                <TextInput style={{fontSize:25, backgroundColor:'#e0ebeb', marginRight:10, width:200, height:50, paddingLeft:10, borderRadius:10,}} placeholder='Confirm pw'></TextInput>
              </View>
          </View>

          <View>
            <TouchableOpacity
              style={styles.signandlog}
              onPress={()=>navigation.navigate('Dashboard')}>
              <Text style={{color:'#ffffff'}}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View  style={[styles.dont,{marginTop:50,marginBottom:50}]}>
          <Text >Already have an account? 
            
          </Text>
          <TouchableOpacity style={styles.opacity} onPress={()=>navigation.navigate('User Log In')}>
              <Text style={{fontSize:15, color:'#1A1513', fontWeight:'bold'}}> Log In</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

//____________________________________________________________________________________________________________________________________________________________________

function Homepage({navigation}){
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground resizeMode='cover' source={back} style={{ flex:1,justifyContent:'center'}}>
       
        <View style={{flex:1,marginTop:1}}>
          <ImageBackground resizeMode='cover'  style={{flex:1, justifyContent:'center',}}>
            <Text
            style={{fontSize:50,
              paddingTop:10,
              color:'black',
              textAlign:'center',
              textShadowColor:'white',
              textShadowOffset:{
                height:2,
                width:3
              },
              textShadowRadius:1}}
            >Dashboard</Text>
          </ImageBackground>
        </View>
        
        <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <TouchableOpacity onPress={()=>navigation.navigate('LP Gas')} style={{flexDirection:'row', justifyContent:'center', padding:20,}}>
            <Text style={{color:'#730099', textAlign:'center', borderRadius:15, marginTop:40, marginRight:20, fontSize:50,
            textShadowColor:'black',
            textShadowOffset:{
              height:2,
              width:3
            },
            textShadowRadius:3
          }}>LP Gas</Text>
            <Image style={{borderRadius:15}} source={{uri:'https://th.bing.com/th/id/OIP.KhLD6R4o1fXR4Zaej53rkAHaE8?pid=ImgDet&w=221&h=147&c=7&dpr=1.25',  width:160, height:160}}></Image>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', justifyContent:'center',marginBottom:45}}>
          <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Live Map')}>
              <Text style={{color:'#730099', textAlign:'center', borderRadius:15, marginTop:20, marginRight:8, fontSize:20,
            textShadowColor:'black',
            textShadowOffset:{
              height:2,
              width:0
            },
            textShadowRadius:1
          }}>Live Queue Map</Text>
              <Image style={{borderRadius:15, margin:7}} source={{uri:'https://www.google.com/maps/d/thumbnail?mid=1CneDNp6JMPT1CQF4b6WUHHAxpK8',  width:160, height:160}}></Image>
            </TouchableOpacity>
          </View>

          <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30,marginLeft:20, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
              <Text style={{color:'#730099', textAlign:'center', borderRadius:15, marginTop:20, marginRight:20, fontSize:20, marginLeft:20,
            textShadowColor:'black',
            textShadowOffset:{
              height:2,
              width:0
            },
            textShadowRadius:1
          }}>Notifications</Text>
              <Image style={{borderRadius:15, margin:7, marginLeft:25}} source={{uri:'https://th.bing.com/th/id/R.ffdc52369878019960e7c61e88ecc00a?rik=j%2ftz2%2bQaBsbULA&pid=ImgRaw&r=0',  width:105, height:160}}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection:'row' ,justifyContent:'center', backgroundColor:'rgba(249, 230, 255,0.3)' , borderRadius:25, marginLeft:50, marginRight:30, marginBottom:10, borderWidth:3, elevation:3}}>
          <View>
            <TouchableOpacity style={{backgroundColor:'rgba(249, 230, 255,0.6)', borderRadius:100, marginLeft:15}}>
              <View>
                <Ionicons style={{margin:10}} name='person' size={75}></Ionicons>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity  style={{backgroundColor:'rgba(249, 230, 255,0.6)', borderRadius:100, marginLeft:15,}}>
              <View>
                <Ionicons name='home' style={{margin:10}} size={75}></Ionicons>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity  style={{backgroundColor:'rgba(249, 230, 255,0.6)', borderRadius:100, marginLeft:15, marginRight:15}}>
              <View>
                <Ionicons name='call' style={{margin:10}} size={75}></Ionicons>
              </View>
            </TouchableOpacity>
          </View>
        </View>
          
            
        
      </ImageBackground>
    </SafeAreaView>
  );
}


//___________________________________________________________________________________________________________________________________________________

function Gas({navigation}){
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground resizeMode='cover' source={back} style={{ flex:1,justifyContent:'center'}}>
        <Text style={{textAlign:'center',fontSize:30}}>Select Your Preference</Text>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Laugfs')} style={{flexDirection:'row', justifyContent:'center', padding:20,}}>
            <Text style={{color:'#730099', textAlign:'center', borderRadius:15, marginTop:40, marginRight:20, fontSize:50,
            textShadowColor:'black',
            textShadowOffset:{
              height:2,
              width:3
            },
            textShadowRadius:3
          }}>Laugfs</Text>
            <Image style={{borderRadius:15}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVL3B7kBSLL10uB6rZXuAS1tm_fOrB4aMk5Q&usqp=CAU',  width:160, height:160}}></Image>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Litro')} style={{flexDirection:'row', justifyContent:'center', padding:20,}}>
            <Text style={{color:'#730099', textAlign:'center', borderRadius:15, marginTop:40, marginRight:20, fontSize:50,
            textShadowColor:'black',
            textShadowOffset:{
              height:2,
              width:3
            },
            textShadowRadius:3
          }}>Litro  </Text>
            <Image style={{borderRadius:15}} source={{uri:'https://pbs.twimg.com/profile_images/768334038218092544/8nySOCpJ_400x400.jpg',  width:160, height:160}}></Image>
          </TouchableOpacity>
        </View>


        <View style={{flexDirection:'row' ,justifyContent:'center', backgroundColor:'rgba(249, 230, 255,0.3)' , borderRadius:25, marginLeft:50, marginRight:50, marginBottom:10, borderWidth:3, elevation:3}}>

          <View style={{justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Dashboard")} style={{backgroundColor:'rgba(249, 230, 255,0.6)', borderRadius:100, }}>
              <View>
                <Ionicons name='home'size={75}></Ionicons>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

//---------------------------------------------------------------------------------------------------

function Litr({navigation}){
  const [seletedValue, useSelectedValue] = useState("Select an option")
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground resizeMode='cover' source={back} style={{ flex:1,justifyContent:'center'}}>
      <Image style={{borderRadius:15, marginLeft:150}} source={{uri:'https://pbs.twimg.com/profile_images/768334038218092544/8nySOCpJ_400x400.jpg',  width:100, height:100}}/>
      
      <View style={{backgroundColor:'rgba(249, 230, 255,0.1)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
      <Text style={{marginLeft:15, marginTop:5, fontSize:20}}>Select Weight:</Text>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.2)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <View>
            <Picker 
              seletedValue={seletedValue}
              onValueChange={(itemValue, itemIndex)=>useSelectedValue(itemValue, itemIndex)}
              >
                <Picker.Item label='Select an option' value='Select an option'/>
                <Picker.Item label = "5 Kg" value='5 Kg'/>
                <Picker.Item label = "12.5 Kg" value='12.5 Kg'/>
                <Picker.Item label = "37.g Kg" value='37.5 Kg'/>

            </Picker>
          </View>
      </View>
      
      <Text style={{marginLeft:15, marginTop:5, fontSize:20}}>Select District:</Text>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.2)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <View>
            
            <Picker 
              seletedValue={seletedValue}
              onValueChange={(itemValue, itemIndex)=>useSelectedValue(itemValue, itemIndex)}
              >
                
                <Picker.Item label='Select an option' value='Select an option'/>
                <Picker.Item label = "Anuradhapura" value='1'/>
                <Picker.Item label = "Polonnaruwa" value='2'/>
                <Picker.Item label = "Gampaha" value='3'/>
                <Picker.Item label = "Colombo" value='4'/>
                <Picker.Item label = "Kandy" value='5'/>
                <Picker.Item label = "Matale" value='6'/>
                <Picker.Item label = "Nuwara Eliya" value='7'/>
            </Picker>
          </View>
      </View>
      <Text style={{marginLeft:15, marginTop:5, fontSize:20}}>Select Town:</Text>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.2)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
      
          <View>
            
            <Picker 
              seletedValue={seletedValue}
              onValueChange={(itemValue, itemIndex)=>useSelectedValue(itemValue, itemIndex)}
              >
                <Picker.Item label='Select an option' value='Select an option'/>
                <Picker.Item label = "Akurana" value='1'/>
                <Picker.Item label = "Bandarawela" value='2'/>
                <Picker.Item label = "Colombo 5" value='3'/>
                <Picker.Item label = "Dehiwala" value='4'/>
                <Picker.Item label = "Ella" value='5'/>
                <Picker.Item label = "Gampaha" value='6'/>
                <Picker.Item label = "Higuraggoda" value='7'/>
                
            </Picker>
          </View>
          
      </View>
        <View>
          <Button title="Search"></Button>
        </View>
        <View style={{marginTop:10, marginLeft:20, marginBottom:5}}>
          <Text style={{marginBottom:5}}>Search Results:</Text>
          <View style={{width:310, height:100, backgroundColor:'white'}}></View>
        </View>

      </View>
      
      
      </ImageBackground>
    </SafeAreaView>
  );
}

function Laug({navigation}){
      const [seletedValue, useSelectedValue] = useState("Select an option")
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground resizeMode='cover' source={back} style={{ flex:1,justifyContent:'center'}}>
      <Image style={{borderRadius:15, marginLeft:150}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVL3B7kBSLL10uB6rZXuAS1tm_fOrB4aMk5Q&usqp=CAU',  width:100, height:100}}/>
      
      <View style={{backgroundColor:'rgba(249, 230, 255,0.1)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
      <Text style={{marginLeft:15, marginTop:5, fontSize:20}}>Select Weight:</Text>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.2)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <View>
            <Picker 
              seletedValue={seletedValue}
              onValueChange={(itemValue, itemIndex)=>useSelectedValue(itemValue, itemIndex)}
              >
                <Picker.Item label='Select an option' value='Select an option'/>
                <Picker.Item label = "5 Kg" value='5 Kg'/>
                <Picker.Item label = "12.5 Kg" value='12.5 Kg'/>
                <Picker.Item label = "37.g Kg" value='37.5 Kg'/>

            </Picker>
          </View>
      </View>
      
      <Text style={{marginLeft:15, marginTop:5, fontSize:20}}>Select District:</Text>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.2)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <View>
            
            <Picker 
              seletedValue={seletedValue}
              onValueChange={(itemValue, itemIndex)=>useSelectedValue(itemValue, itemIndex)}
              >
                
                <Picker.Item label='Select an option' value='Select an option'/>
                <Picker.Item label = "Anuradhapura" value='1'/>
                <Picker.Item label = "Polonnaruwa" value='2'/>
                <Picker.Item label = "Gampaha" value='3'/>
                <Picker.Item label = "Colombo" value='4'/>
                <Picker.Item label = "Kandy" value='5'/>
                <Picker.Item label = "Matale" value='6'/>
                <Picker.Item label = "Nuwara Eliya" value='7'/>
            </Picker>
          </View>
      </View>
      <Text style={{marginLeft:15, marginTop:5, fontSize:20}}>Select Town:</Text>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.2)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
      
          <View>
            
            <Picker 
              seletedValue={seletedValue}
              onValueChange={(itemValue, itemIndex)=>useSelectedValue(itemValue, itemIndex)}
              >
                <Picker.Item label='Select an option' value='Select an option'/>
                <Picker.Item label = "Akurana" value='1'/>
                <Picker.Item label = "Bandarawela" value='2'/>
                <Picker.Item label = "Colombo 5" value='3'/>
                <Picker.Item label = "Dehiwala" value='4'/>
                <Picker.Item label = "Ella" value='5'/>
                <Picker.Item label = "Gampaha" value='6'/>
                <Picker.Item label = "Higuraggoda" value='7'/>
                
            </Picker>
          </View>
          
      </View>
        <View>
          <Button title="Search"></Button>
        </View>
        <View style={{marginTop:10, marginLeft:20, marginBottom:5}}>
          <Text style={{marginBottom:5}}>Search Results:</Text>
          <View style={{width:310, height:100, backgroundColor:'white'}}></View>
        </View>

      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

//***************************************************************************************************

function Map({navigation}){
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground resizeMode='cover' source={back} style={{ flex:1,justifyContent:'center'}}>
      <Text style={{textAlign:'center',fontSize:30, marginBottom:30}}>Live Queue Map</Text>
        <TouchableOpacity 
          onPress={()=>Linking.openURL('https://goo.gl/maps/BVDGJbqorx4TZqys9')} style={{justifyContent:'center'}}
        >
          <Image source={{uri:'https://www.google.com/maps/d/thumbnail?mid=1flC1NfvW9fY8GZzAFQxjgFpfOpw&hl=en',width:500, height:530}}></Image>
        </TouchableOpacity>

        <View style={{flexDirection:'row' ,justifyContent:'center', backgroundColor:'rgba(249, 230, 255,0.3)' , borderRadius:25, marginLeft:50, marginRight:50, marginBottom:10, borderWidth:3, elevation:3, marginTop:25}}>

          <View style={{justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Dashboard")} style={{backgroundColor:'rgba(249, 230, 255,0.6)', borderRadius:100, }}>
              <View>
                <Ionicons name='home'size={75}></Ionicons>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

//*****************************************************************************************************/

function Notification({navigation}){
  return(
    
    <SafeAreaView style={styles.container}>
      <ImageBackground resizeMode='cover' source={back} style={{ flex:1,justifyContent:'center'}}>
      <ScrollView>
        
        
      <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', padding:20,}}>
            <Ionicons name='notifications' size={25}></Ionicons>
            <Text style={{color:'black', textAlign:'center', marginLeft:10,borderRadius:15, marginRight:20, fontSize:20,}}>Notification</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center'}}>Date: 01/01/2022  Time: 10.59 AM              </Text>
      </View>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', padding:20,}}>
            <Ionicons name='notifications' size={25}></Ionicons>
            <Text style={{color:'black', textAlign:'center', marginLeft:10,borderRadius:15, marginRight:20, fontSize:20,}}>Notification</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center'}}>Date: 01/01/2022  Time: 10.59 AM              </Text>
      </View>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', padding:20,}}>
            <Ionicons name='notifications' size={25}></Ionicons>
            <Text style={{color:'black', textAlign:'center', marginLeft:10,borderRadius:15, marginRight:20, fontSize:20,}}>Notification</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center'}}>Date: 01/01/2022  Time: 10.59 AM              </Text>
      </View>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', padding:20,}}>
            <Ionicons name='notifications' size={25}></Ionicons>
            <Text style={{color:'black', textAlign:'center', marginLeft:10,borderRadius:15, marginRight:20, fontSize:20,}}>Notification</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center'}}>Date: 01/01/2022  Time: 10.59 AM              </Text>
      </View>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', padding:20,}}>
            <Ionicons name='notifications' size={25}></Ionicons>
            <Text style={{color:'black', textAlign:'center', marginLeft:10,borderRadius:15, marginRight:20, fontSize:20,}}>Notification</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center'}}>Date: 01/01/2022  Time: 10.59 AM              </Text>
      </View>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', padding:20,}}>
            <Ionicons name='notifications' size={25}></Ionicons>
            <Text style={{color:'black', textAlign:'center', marginLeft:10,borderRadius:15, marginRight:20, fontSize:20,}}>Notification</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center'}}>Date: 01/01/2022  Time: 10.59 AM              </Text>
      </View>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', padding:20,}}>
            <Ionicons name='notifications' size={25}></Ionicons>
            <Text style={{color:'black', textAlign:'center', marginLeft:10,borderRadius:15, marginRight:20, fontSize:20,}}>Notification</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center'}}>Date: 01/01/2022  Time: 10.59 AM              </Text>
      </View>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', padding:20,}}>
            <Ionicons name='notifications' size={25}></Ionicons>
            <Text style={{color:'black', textAlign:'center', marginLeft:10,borderRadius:15, marginRight:20, fontSize:20,}}>Notification</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center'}}>Date: 01/01/2022  Time: 10.59 AM              </Text>
      </View>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', padding:20,}}>
            <Ionicons name='notifications' size={25}></Ionicons>
            <Text style={{color:'black', textAlign:'center', marginLeft:10,borderRadius:15, marginRight:20, fontSize:20,}}>Notification</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center'}}>Date: 01/01/2022  Time: 10.59 AM              </Text>
      </View>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', padding:20,}}>
            <Ionicons name='notifications' size={25}></Ionicons>
            <Text style={{color:'black', textAlign:'center', marginLeft:10,borderRadius:15, marginRight:20, fontSize:20,}}>Notification</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center'}}>Date: 01/01/2022  Time: 10.59 AM              </Text>
      </View>
      <View style={{backgroundColor:'rgba(249, 230, 255,0.4)', margin:30, borderRadius:15,elevation:3, borderColor:'rgba(59,0,77,0.1)', borderWidth:3}}>
          <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', padding:20,}}>
            <Ionicons name='notifications' size={25}></Ionicons>
            <Text style={{color:'black', textAlign:'center', marginLeft:10,borderRadius:15, marginRight:20, fontSize:20,}}>Notification</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center'}}>Date: 01/01/2022  Time: 10.59 AM              </Text>
      </View>
      


        </ScrollView>
        <View style={{flexDirection:'row' ,justifyContent:'center', backgroundColor:'rgba(249, 230, 255,0.3)' , borderRadius:25, marginLeft:50, marginRight:50, marginBottom:10, borderWidth:3, elevation:3}}>

          <View style={{justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Dashboard")} style={{backgroundColor:'rgba(249, 230, 255,0.6)', borderRadius:100, }}>
              <View>
                <Ionicons name='home'size={75}></Ionicons>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      
      
      </ImageBackground>
    </SafeAreaView>
  );
}


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="User Log In" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="New User Sign In" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboard" component={Homepage} options={{ headerShown: false }}/>
        <Stack.Screen name="LP Gas" component={Gas}/>
        <Stack.Screen name="Live Map" component={Map}/>
        <Stack.Screen name="Notification" component={Notification}/>
        <Stack.Screen name="Litro" component={Litr}/>
        <Stack.Screen name="Laugfs" component={Laug}/>
        <Stack.Screen name="Reset" component={Resetpw} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:300,
    marginLeft:1,
    
    marginTop:10,
    alignItems:'center'
    
  },
  inputcontainer:{
    paddingTop:10,
    paddingBottom:10,
    marginLeft:80,
    marginTop:50
    
   
  },
  signandlog:{
    backgroundColor:'#1A1513',
    alignItems:'center',
    marginLeft:190,
    marginRight:100,
    paddingTop:8,
    paddingBottom:8,
    marginTop:10,
    borderRadius:15,
  },
  dont:{
    alignItems:'center',
    marginTop:120,
    flexDirection:'row',
    marginLeft:110
  }
});
