import { useRef } from "react";
import TicketInfo from "./TicketInfo";

function TicketInfoList({ ticket, addToTicket  }) {
  const sectionEl = useRef(null);
 
 
  function finishedAdding() {
   event.preventDefault();

    console.log(sectionEl.current);
    const tickets = [];
    // 1. find alle .ticketInfo.queryselectorALL()
    const formsElements = sectionEl.current.querySelectorAll(".ticketInfo");
    console.log(formsElements);

    // 2. find alle formfelter og lave et object af hver formfield (object fullname: "", email:"", birthday: "")

    formsElements.forEach((e) => {
      const formInfo = { fullname: e.querySelector(".fullname").value, email: e.querySelector(".email").value, birthday: e.querySelector(".birthday").value, type:e.querySelector(".type").textContent };
      tickets.push(formInfo);
    });
    // 3. addToTicket("info", "voresNyeArray" )
    addToTicket("info", tickets);
  }
  return (
    <section ref={sectionEl}>
      {[...Array(ticket.r).keys()].map((info, index) => (
        <TicketInfo
          ticket={ticket}
          type={"REGULAR"}
          key={index}
          finishedAdding={finishedAdding}
        />
      ))}
      {[...Array(ticket.v).keys()].map((info, index) => (
        <TicketInfo
          ticket={ticket}
          type={"VIP"}
          key={index}
          finishedAdding={finishedAdding}
        />
      ))}
      <button onClick={finishedAdding}>NEXT</button>
    </section>
  );
}

export default TicketInfoList;