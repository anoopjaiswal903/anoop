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

//object of person
const person1 = new Person("anoop", true);
const person2 = new Person("suraj", false);
const person3 = new Person("sanjay", false);
const person4 = new Person("sujit", true);

//class Tickets
class Tickets {
  constructor(ticketId) {
    this.ticketId = ticketId;
  }
  getTicketId() {
    return this.ticketId;
  }
  setTicketId(ticketId) {
    this.ticketId = 5;
  }
}

//object of Tickets
const Ticket1 = new Tickets(1);
const Ticket2 = new Tickets(2);
const Ticket3 = new Tickets(3);
const Ticket4 = new Tickets(4);

//function
PersonList = () => {
  var emp = [];
  emp.push(person1);
  emp.push(person2);
  emp.push(person3);
  emp.push(person4);

  //ticket
  var tickets = [];
  tickets.push(Ticket1);
  tickets.push(Ticket2);
  tickets.push(Ticket3);
  tickets.push(Ticket4);

  for (i = 0; i < emp.length; i++) {
    if (emp[i].availability) {
      console.log(
        "Assign Ticket with id :" + emp[i].name + " = " + tickets[i].ticketId
      );
    }
  }
};
PersonList();
