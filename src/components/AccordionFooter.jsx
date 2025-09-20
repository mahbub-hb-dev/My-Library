import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const AccordionFooter = () => {
  return (
    <div>
      <Accordion collapseAll>

        <AccordionPanel>
          <AccordionTitle className="text-red-300 text-xl font-[600]"> Library </AccordionTitle>
          <AccordionContent className="text-white text-sm [&>p]:leading-8">
            <p> <a className="hover:underline" href="#"> Genres </a> </p>
            <p> <a className="hover:underline" href="#"> Languages </a> </p>
            <p> <a className="hover:underline" href="#"> Authors </a> </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle className="text-red-300 text-xl font-[600]"> Community </AccordionTitle>
          <AccordionContent className="text-white text-sm [&>p]:leading-8">
            <p> <a className="hover:underline" href="#"> Articles </a> </p>
            <p> <a className="hover:underline" href="#"> Authors Interview </a> </p>
            <p> <a className="hover:underline" href="#"> Newsletter </a> </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle className="text-red-300 text-xl font-[600]"> Company </AccordionTitle>
          <AccordionContent className="text-white text-sm [&>p]:leading-8">
            <p> <a className="hover:underline" href="#"> Author Services </a> </p>
            <p> <a className="hover:underline" href="#"> About / Contact </a> </p>
            <p> <a className="hover:underline" href="#"> Accessibility Statement </a> </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle className="text-red-300 text-xl font-[600]"> Follow </AccordionTitle>
          <AccordionContent className="text-white text-sm [&>p]:leading-8">
            <p> <a className="hover:underline" href="#"> Fecebook </a> </p>
            <p> <a className="hover:underline" href="#"> Twitter </a> </p>
            <p> <a className="hover:underline" href="#"> Instagram </a> </p>
          </AccordionContent>
        </AccordionPanel>

      </Accordion>
      <div className='text-red-300 py-6 text-center text-xl'>
            <p> Developed By &copy; Mahbubu Hasan Belal </p>
            <p className="leading-11"> <a href="#" className="hover:underline"> Terms </a> - <a href="#" className="hover:underline"> Privacy </a> </p>
        </div>
    </div>
  )
}

export default AccordionFooter;
