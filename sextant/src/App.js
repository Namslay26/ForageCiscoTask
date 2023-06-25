
import './App.css';
import Banner from './Banner';
import Component from './Component';

function GetIP(props) {
  let url = ""
  let ipAddr = ""

  //checks which IP version is passed in
  if (props.type === 'IPV4') {
    url = "https://api.ipify.org?format=json";
    console.log('4');
  } else if (props.type === 'IPV6') {
    url = "https://api64.ipify.org?format=json";
    console.log('6');
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      /*
      console.log(url);
      console.log(data.ip);
      */
      ipAddr = data.ip;

      //appends ip if not already displayed on page
      if (!document.getElementsByClassName('IPsection')[0].innerHTML.includes('IPV6') || !document.getElementsByClassName('IPsection')[0].innerHTML.includes('IPV4')) {
        document.getElementsByClassName('IPsection')[0].innerHTML += '<h3>' + props.type + ': ' + ipAddr + '</h3>';
      };
    }
    );

}

function App() {
  return (
    <div className="App">
      <Banner title={"Welcome to the title"}></Banner>
      <div className=" flex">
        <Component content={'This is a component!'}></Component>
        <Component content={'This is a component!'}></Component>
        <div className='IPsection'>
        <GetIP type="IPV4"></GetIP>
        <GetIP type="IPV6"></GetIP>
        </div>
      </div>
    </div>
  );
}

export default App;
