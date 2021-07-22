var publisherSubscriber = {};

(function(container){
    var id = 0;

    container.subscribe = function(topic, func) {
        if (!(topic in container)) {
            container[topic] = [];
        }
        container[topic].push({
            id: ++id,
            callBack: func
        });

        return id;
    };

    container.unsubscribe = function(topic, id) {
        let subscribers = [];
        for (let subscriber of container[topic]) {
            if (subscriber.id !== id) {
                subscribers.push(id);
            }
        }
        container[topic] = subscribers;
    };

    container.publish = function(topic, data) {
        for (let subscriber of container[topic]) {
            subscriber.callBack(data);
        }
    }

})(publisherSubscriber);

var subscriptionID1 = publisherSubscriber.subscribe("mouseClicked", function(data) {
    console.log("I am Bob's callback function for a mouse clicked event and this is my event data: " + JSON.stringify(data));
});

var subscriptionID2 = publisherSubscriber.subscribe("mouseHovered", function(data) {
    console.log("I am Bob's callback function for a hovered mouse event and this is my event data: " + JSON.stringify(data));
});

var subscriptionID3 = publisherSubscriber.subscribe("mouseClicked", function(data) {
    console.log("I am Alice's callback function for a mouse clicked event and this is my event data: " + JSON.stringify(data));
});

publisherSubscriber.publish("mouseClicked", {"data": "data1"});
publisherSubscriber.publish("mouseHovered", {"data": "data2"});

// we unsubscribe from an event by removing the subscription ID
publisherSubscriber.unsubscribe("mouseClicked", subscriptionID3);

// there are 2 console.logs executed
publisherSubscriber.publish("mouseClicked", {"data": "data1"});