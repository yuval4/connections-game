import React from "react";
import { MAX_MISTAKES } from "../../../lib/constants";
import { Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import BaseModal from "../BaseModal";

function InfoModal() {
  return (
    <BaseModal
      title=""
      trigger={<Info className="ml-4" />}
      initiallyOpen={false}
      actionButtonText="הבנתי!"
    >
      <Tabs defaultValue="how-to-play">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="how-to-play">איך משחקים?</TabsTrigger>
          <TabsTrigger value="about-us">עלינו</TabsTrigger>
        </TabsList>
        <TabsContent value="how-to-play">
          {" "}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>מה המטרה?</AccordionTrigger>
              <AccordionContent>
                למצוא זוגות של קבוצות או שמות עם משהו במשותף
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>איך אני משחק?</AccordionTrigger>
              <AccordionContent>
                תלחץ על מילים ובסוף על "בדיקה" כדי לבדוק אם הניחוש שלך נכון.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>כמה נסיונות יש לי?</AccordionTrigger>
              <AccordionContent>{MAX_MISTAKES}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="about-us">
          {" "}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>מי אתם?</AccordionTrigger>
              <AccordionContent>אני אני</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>איך אפשר לתמוך בנו?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-1">תנו לנו את כל הכסף שלכם</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>עוד פרוייקטים מזניבים?</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-flow-row">
                  <p>כרגע לא </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </BaseModal>
  );
}

export default InfoModal;
