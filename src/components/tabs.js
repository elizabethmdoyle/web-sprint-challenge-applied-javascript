import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topic = document.createElement('div');
  const tab1 = document.createElement('div');
  const tab2 = document.createElement('div');
  const tab3 = document.createElement('div');
  // const tab4 = document.createElement('div');
  // const tab5 = document.createElement('div');


  topic.classList.add('topics');
  tab1.classList.add('tab');
  tab2.classList.add('tab');
  tab3.classList.add('tab');
  // tab4.classList.add('tab');
  // tab5.classList.add('tab');
 
  tab1.textContent = 'javascript';
  tab2.textContent = 'bootstrap';
  tab3.textContent = 'technology';
  // tab4.textContent = 'jquery';
  // tab5.textContent = 'node.js';

 
  topic.appendChild(tab1);
  topic.appendChild(tab2);
  topic.appendChild(tab3);
  // topic.appendChild(tab4);
  // topic.appendChild(tab5);

 
  return topic
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const tabs = Tabs('topics');

  //  tabsContainer.appendChild(tabs)
 
  axios.get('http://localhost:5001/api/topics')
        .then(res => {
         
          const topics = [res.data.topics];
          console.log(topics);

          const tabsContainer = document.querySelector(selector);

          // document.querySelector(selector).appendChild(Tabs(topics))

          for( let i = 0; i < topics.length; i++) {
            if(topics == tabsContainer) {
              console.log('topic already present')
            } else if (topics =! topics) {
              var newTopic = document.createElement('div');
                   newTopic.classList.add('tab');
                   newTopic.textContent = topics
                   tabsContainer.appendChild(Tabs(tabs.newTopic))
            }  else { 
                   console.log('topic not appending') }
          }
        })


          
         .catch(err => console.log(err))

      

   return tabs


}
export { Tabs, tabsAppender }


// topics.forEach(topic => {
//   if(topic === null) {
//      console.log('null')
//    } else if(topic ==! topic) { 
//      const newTopic = document.createElement('div');
//      newTopic.classList.add('tab');
//      newTopic.textContent = topic
//      tabsContainer.appendChild(Tabs(tabs.newTopic))
//    } else { 
//      console.log('topic not appending') }

// })
// })