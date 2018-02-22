import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, FlatList } from 'react-native';

const COMMUNITY_MEMBERS = [
  {
    name: 'Monte Thakkar',
    image: 'https://avatars2.githubusercontent.com/u/7840686?s=400&v=4',
    github_username: 'monte9'
  },
  {
    name: 'Ryan Liszewski',
    image: 'https://avatars3.githubusercontent.com/u/5275250?s=460&v=4',
    github_username: 'ryanliszewski'
  },
  {
    name: 'Thomas Zhu',
    image: 'http://thomaszhu.com/resources/thomas_avatar.jpeg',
    github_username: 'thomashzhu'
  },
  {
    name: 'Bhavesh Chowdhury',
    image: 'https://avatars3.githubusercontent.com/u/13439148?s=460&v=4',
    github_username: 'bhaveshc789'
  },
  {
    name: 'Sukhjit Singh',
    image: 'https://avatars1.githubusercontent.com/u/18251293?s=400&u=1ee2922f2dd90d94bb4efbec7cc815ef510a0ad7&v=4',
    github_username: 'sukhjitsingh'
  },
  {
    name: 'Prakash Gurung',
    image: 'https://avatars.githubusercontent.com/makkhay',
    github_username: 'makkhay'
  },
  {
    name: 'Nicholas Szeto',
    image: 'https://avatars1.githubusercontent.com/u/23561635?s=460&v=4',
    github_username: 'niszeto'
  },
  {
    name: 'Emanuel Saunders',
    image: 'https://scontent-lax3-2.cdninstagram.com/vp/1ee634d2bdf29d5a327858a15ccfdf42/5B26F2E8/t51.2885-19/s150x150/18160691_1198139890329419_5383374010954285056_a.jpg',
    github_username: 'saundemanu'
  },
  {
    name: 'William Hua',
    image: 'https://avatars3.githubusercontent.com/u/36139326?s=460&v=4',
    github_username: 'william-hua'
  },
  {
    name: 'Mitul Savani',
    image: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/18556546_1553987881278489_849408995015005895_o.jpg?oh=bb65219475a9cbac85ca7090e7ee877b&oe=5ADE398B',
    github_username: 'mitulsavani'
  },
  {
    name: 'Jakhongir Khusanov',
    image: 'https://avatars0.githubusercontent.com/u/25942541?s=460&v=4',
    github_username: 'jkhusanov'
  },
  {
    name: 'Teodora Caneva',
    image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c44.0.320.320/p320x320/20914645_1579156895438534_1027285013181250707_n.jpg?oh=0ff1b3c4c8bc8e00edb84cecd660d0fe&oe=5B1C897A',
    github_username: 'kodekat'
  },
  {
    name: 'Affaan Ghazzali',
    image: 'https://avatars0.githubusercontent.com/u/32111151?s=460&v=4',
    github_username: 'affaanghazzali'
  },
  {
    name: 'Girish Rawat',
    image: 'https://avatars2.githubusercontent.com/u/6697235?s=460&v=4',
    github_username: 'GirishRawat'
  },
  {
    name: 'Karan Gupta',
    image: 'https://avatars1.githubusercontent.com/u/19352928?s=460&v=4',
    github_username: 'karanguptak9'
  }
]

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      backgroundColor: '#F6F6F6',
      phrase: '',
    }
  }

  handleClick = () => {
    const randomColor = '#'+ Math.floor(Math.random()* 16777215).toString(16);

    this.setState({
      backgroundColor: randomColor
    })
  }

  handleSubmit= () => {
    //display alert
    //https://facebook.github.io/react-native/docs/alert.html
  }


  render() {
    return (
      // ScrollView - Flex column
      <ScrollView style={styles.scrollView}>
        {/* bigImageContainer - Flex row */}
        <View style={styles.bigImageContainer}>
          <Image 
          source={require('./assets/images/batman.png')}
          style={styles.bigImage}
          />
        </View>

        <View style={styles.smallImageContainer}>
          <Image 
            source={require('./assets/images/beefPho.jpg')}
            style={styles.smallImage}
          />

          <Image 
            source={require('./assets/images/ramen.jpg')}
            style={styles.smallImage}
          />
        </View>


        <View 
        style={styles.toggleContainer}

        backgroundColor={this.state.backgroundColor}
        >
          <Button 
          style={styles.toggleButton}
          title='Change Background Color'
          color='black'
          onPress={this.handleClick}
          />

        </View>

        <TextInput
          style={styles.textInputContainer}
          value={this.state.phrase}
          onChange={(text) => this.setState({phrase: text})}
          // call handle submit to display an alert
        />

        <FlatList
          //display community memebers data 
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor: 'black',
    flexDirection: 'column',
  },

  bigImageContainer:{
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },

  bigImage:{
    flex:1,
  },

  smallImageContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'red',
  },

  smallImage:{
    height: 150,
    width: 150,
    borderRadius:75,
    borderWidth: 2,
    borderColor: 'white',
  },

  toggleContainer: {
    height: 200,
    justifyContent: 'center',
  },
  
  toggleButton:{
    flex:1,
  },
  textInputContainer:{

  }
});
