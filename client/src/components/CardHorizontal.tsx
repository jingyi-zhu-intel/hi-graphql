import example from "../example.jpeg";
import { Tag } from "@spark-design/react";
import "./CardHorizontal.css";

export interface HiCardHorizontalProps {
  img?: string;
  title?: string;
  version?: string;
  description?: string;
  height?: string;
  tags?: string[];
}

export const HiCardHorizontal = ({
  img = example,
  title = "Title",
  version = "v1.0.4",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ectetur adipiscing elit. Etiam bibendum tincidunt laoreet. Aenean eget auctor felis, eget pellentesque nibh. Etiam dui dolor, feugiat sed tempus eget, vehicula vel mi.",
  height = "200px",
  tags = ["AI", "ML", "Edge APP"],
}: HiCardHorizontalProps) => {
  return (
    <div className="card-horizontal" style={{ height: height }}>
      <img className="card-horizontal__img" src={img} alt="example" />
      <div className="card-horizontal__content">
        <h2 className="card-horizontal__title">{title}</h2>
        <p className="card-horizontal__versions">{version}</p>
        <p className="card-horizontal__description">{description}</p>
        <div className="card-horizontal__tags">
          {tags.map((tag) => (
            <Tag label={tag} theme="cobalt" size="small" />
          ))}
        </div>
      </div>
    </div>
    // <div
    //   className="spark-card-border-normal spark-card-overlay"
    //   style={{ zIndex: 0, cursor: "auto", margin: "2rem 0" }}
    // >
    //   <div
    //     style={{ width: "100%", height: "200px" }}
    //     className="spark-card-horizontal"
    //   >
    //     <div
    //       className="false"
    //       style={{
    //         display: "grid",
    //         gridTemplateColumns: "min-content auto",
    //         boxShadow: "black",
    //       }}
    //     >
    //       <div className="spark-card-horizontal-image-container">
    //         <img
    //           className="spark-card-horizontal-bg-image"
    //           src={example}
    //           alt="example"
    //           style={{ height: "100%" }}
    //         />
    //       </div>
    //       <div className="spark-card-horizontal-information-container">
    //         <div className="spark-card-horizontal-credential-container">
    //           <div className="spark-card-titles-container">
    //             <div className="spark-card-metrics-container">
    //               <span className="spark-card-title">Card title</span>
    //               <div className="spark-card-options">
    //                 <div className="spark-card-options-item">
    //                   <span
    //                     aria-hidden="true"
    //                     role="img"
    //                     className="spark-icon icon comment solid"
    //                   ></span>
    //                   <span className="spark-card-comment-number">124</span>
    //                 </div>
    //                 <div className="spark-card-options-item">
    //                   <span
    //                     aria-hidden="true"
    //                     role="img"
    //                     className="spark-icon icon like solid"
    //                   ></span>
    //                   <span className="spark-card-like-number">1.4k</span>
    //                 </div>
    //                 <div className="spark-card-options-item">
    //                   <button
    //                     className="spark-button spark-button-ghost spark-button-size-m spark-button-icon-only spark-focus-visible spark-focus-visible-self spark-focus-visible-snap"
    //                     type="button"
    //                   >
    //                     <span className="spark-button-content">
    //                       <span
    //                         aria-hidden="true"
    //                         role="img"
    //                         className="spark-icon icon ellipsis-v solid"
    //                       ></span>
    //                     </span>
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="spark-card-subtitle">
    //               Subtitle text, optional long description
    //             </div>
    //           </div>
    //         </div>
    //         <div className="spark-card-horizontal-description">
    //           <span>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //           </span>
    //         </div>
    //         <div className="spark-card-horizontal-line"></div>
    //         <div className="spark-card-horizontal-buttons-container">
    //           <button
    //             className="spark-button spark-button-action spark-button-size-m spark-focus-visible spark-focus-visible-self spark-focus-visible-snap"
    //             type="button"
    //           >
    //             <span className="spark-button-content">Buy now</span>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
