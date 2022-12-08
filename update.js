//class Person
class Person {
  constructor(name, availability) {
    this.name = name;
    this.availability = availability;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getAvailability() {
    return this.availability;
  }
  setAvailability(availability) {
    this.availability = availability;
  }
}

//class Tickets
class Tickets {
  constructor(ticketId) {
    this.ticketId = ticketId;
  }
  getTicketId() {
    return this.ticketId;
  }
  setTicketId(ticketId) {
    this.ticketId = ticketId;
  }
}

//function
PersonList = () => {
  //person
  var emp = [];
  var personName = prompt("enter name");
  var available = prompt("enter availability true or false");
  emp.push(new Person(personName, available));

  //ticket
  var tickets = [];
  var id = prompt("enter id");
  tickets.push(new Tickets(id));

  for (i = 0; i < emp.length; i++) {
    if (emp[i].availability == "true") {
      console.log(
        "Assign Ticket with id :" + emp[i].name + " --" + tickets[i].ticketId
      );
    } else if (emp[i].availability == "false") {
      console.log("not added");
    }
  }
};
PersonList();
