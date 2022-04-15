/* eslint-disable no-unused-vars */
<template lang="">
  <div>
    <Header />

    <div v-show="!chatVisible" id="welcome-page">
      <div class="welcome-page-container">
        <h1 class="title">Welcome - To join the chat group enter your name</h1>
        <form id="welcomeForm" name="welcomeForm">
          <div class="form-group">
            <input
              type="text"
              v-model="name"
              placeholder="name"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <button
              v-on:click.prevent="connect"
              onclass="accent username-submit"
              type="submit"
            >
              Lets Begin
            </button>
          </div>
        </form>
      </div>
    </div>

    <div v-show="chatVisible" id="dialogue-page" class="hidden">
      <div class="dialogue-container">
        <div class="dialogue-header">
          <h2>chat</h2>
        </div>
        <ul id="messageList"></ul>
        <form id="dialogueForm" name="dialogueForm" nameForm="dialogueForm">
          <div class="form-group">
            <div class="input-group clearfix">
              <input
                type="text"
                v-model="chatMessage"
                placeholder="Enter a message...."
                autocomplete="off"
                class="form-control"
              />
              <button
                v-on:click="sendMessage()"
                class="glyphicon glyphicon-share-alt"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

import Header from "@/components/header/header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      chatMessage: null,
      stompClient: null,
      name: "",
      chatVisible: false,
    };
  },
  mounted() {
    document
      .querySelector("#welcomeForm")
      .addEventListener("submit", this.connect, true);
    document
      .querySelector("#dialogueForm")
      .addEventListener("submit", this.sendMessage, true);
  },

  methods: {
    connect() {
      if (this.name) {
        this.chatVisible = true;
        var socket = new SockJS("http://localhost:8086/websocketApp");
        // console.log(socket);
        this.stompClient = Stomp.over(socket);
        try {
          this.stompClient.connect({}, () => {
            console.log("connected");
            this.stompClient.subscribe(
              "ws://localhost:15672/topic/javainuse",
              this.onMessageReceived
            );

            this.stompClient.send(
              "/app/chat.newUser",
              {},
              JSON.stringify({
                sender: this.name,
                type: "newUser",
              })
            );
          });
        } catch (error) {
          console.log(error);
        }
      }
    },

    connectionSuccess() {
      console.log("rhhhghgh");
      this.stompClient.subscribe(
        "http://localhost:15672/topic/javainuse",
        this.onMessageReceived
      );

      this.stompClient.send(
        "/app/chat.newUser",
        {},
        JSON.stringify({
          sender: this.name,
          type: "newUser",
        })
      );
    },

    sendMessage(event) {
      var messageContent = document.querySelector("#chatMessage").value.trim();

      if (messageContent && this.stompClient) {
        var chatMessage = {
          sender: this.name,
          content: document.querySelector("#chatMessage").value,
          type: "CHAT",
        };
        this.stompClient.send(
          "/app/chat.sendMessage",
          {},
          JSON.stringify(chatMessage)
        );
        document.querySelector("#chatMessage").value = "";
      }
      event.preventDefault();
    },

    onMessageReceived(payload) {
      var message = JSON.parse(payload.body);

      var messageElement = document.createElement("li");

      if (message.type === "newUser") {
        messageElement.classList.add("event-data");
        message.content = message.sender + "has joined the chat";
      } else if (message.type === "Leave") {
        messageElement.classList.add("event-data");
        message.content = message.sender + "has left the chat";
      } else {
        messageElement.classList.add("message-data");

        var element = document.createElement("i");
        var text = document.createTextNode(message.sender[0]);
        element.appendChild(text);

        messageElement.appendChild(element);

        var usernameElement = document.createElement("span");
        var usernameText = document.createTextNode(message.sender);
        usernameElement.appendChild(usernameText);
        messageElement.appendChild(usernameElement);
      }

      var textElement = document.createElement("p");
      var messageText = document.createTextNode(message.content);
      textElement.appendChild(messageText);

      messageElement.appendChild(textElement);

      document.querySelector("#messageList").appendChild(messageElement);
      document.querySelector("#messageList").scrollTop =
        document.querySelector("#messageList").scrollHeight;
    },
  },
};
</script>
<style scooped lang="css">
.clearfix:after {
  display: block;
  content: "";
  clear: both;
}

input {
  padding-left: 10px;
  outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 20px;
  margin-bottom: 20px;
}

h1 {
  font-size: 1.7em;
}

a {
  color: #2eb7eb;
}

button {
  box-shadow: none;
  border: 1px solid transparent;
  font-size: 14px;
  outline: none;
  line-height: 100%;
  white-space: nowrap;
  vertical-align: middle;
  padding: 0.6rem 1rem;
  border-radius: 2px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  min-height: 38px;
}

button.default {
  background-color: #e8e8e8;
  color: #333;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);
}

button.primary {
  background-color: #128ff2;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);
  color: #fff;
}

button.accent {
  background-color: #ff4743;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);
  color: #fff;
}

#welcome-page {
  text-align: center;
}

.welcome-page-container {
  background-color: #2eb7eb;
  width: 100%;
  max-width: 500px;
  display: inline-block;
  margin-top: 42px;
  vertical-align: middle;
  position: relative;
  padding: 35px 55px 35px;
  min-height: 250px;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: -160px;
}

#dialogue-page {
  position: center;
  height: 100%;
}

.dialogue-container {
  background-color: #2eb7eb;
  width: 100%;
  max-width: 500px;
  display: inline-block;
  display: inline-block;
  margin-top: 42px;
  vertical-align: middle;
  position: relative;
  padding: 35px 55px 35px;
  min-height: 250px;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: -160px;
}

#dialogue-page ul {
  list-style-type: none;
  background-color: #fff;
  margin: 0;
  overflow: auto;
  overflow-y: scroll;
  padding: 0 20px 0px 20px;
}

#dialogue-page #dialogueForm {
  padding: 20px;
}

#dialogue-page ul li {
  line-height: 1.5rem;
  padding: 10px 20px;
  margin: 0;
  border-bottom: 1px solid #f4f4f4;
}

#dialogue-page ul li p {
  margin: 0;
}

#dialogue-page .event-data {
  width: 100%;
  text-align: center;
  clear: both;
}

#dialogue-page .event-data p {
  color: #777;
  font-size: 14px;
  word-wrap: break-word;
}

#dialogue-page .message-data {
  padding-left: 68px;
  position: relative;
}

#dialogue-page .message-data i {
  position: absolute;
  width: 42px;
  height: 42px;
  overflow: hidden;
  left: 10px;

  font-size: 18px;
  line-height: 42px;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  font-style: normal;
  text-transform: uppercase;
}

#dialogue-page .message-data span {
  color: #333;
  font-weight: 600;
}

#dialogue-page .message-data p {
  color: #43464b;
}

#dialogueForm .input-group input {
  border: 0;
  padding: 10px;
  background: whitesmoke;
  float: left;
  width: calc(100% - 85px);
}

#dialogueForm .input-group button {
  width: 80px;
  height: 38px;
  margin-left: 5px;
}

.dialogue-header {
  text-align: center;
  padding: 15px;
  border-bottom: 1px solid #ececec;
}

.dialogue-header h2 {
  margin: 0;
  font-weight: 500;
}

@media screen and (max-width: 730px) {
  .dialogue-container {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 1000px;
  }
}
</style>
