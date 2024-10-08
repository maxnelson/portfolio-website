import { SketchblogPost } from "@/sketchblog/SketchblogPost";
import { getPostCategory } from "@/sketchblog/getPostCategory";
import { useState, useEffect } from "react";

export function PostCollection(props) {
  const [collectionDataObject, setCollectionDataObject] = useState<any[]>([]);
  const postCollectionQueryResult = getPostCategory(props.category);

  useEffect(() => {
    if (postCollectionQueryResult.status === "success") {
      const collectionDataObject = postCollectionQueryResult.data.docs
        .map((doc) => {
          const docData = doc.data();
          docData.id = doc.id;
          return docData;
        })
        .reverse();
      collectionDataObject.sort((a, b) => {
        const dateA = new Date(a.date.seconds);
        const dateB = new Date(b.date.seconds);
        return dateB.getTime() - dateA.getTime();
      });
      setCollectionDataObject(() => {
        return collectionDataObject;
      });
    }
  }, [postCollectionQueryResult.status, props.category]);

  return (
    <>
      <div className="_max-width--80percent _display--inline-block">
        {collectionDataObject &&
          collectionDataObject.map((postData) => {
            return <SketchblogPost key={postData.id} postData={postData} />;
          })}
      </div>
    </>
  );
}
