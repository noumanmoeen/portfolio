import React from "react";
import ams from "../assets/img/ams.png";

const ProjectDetails = ({
  description,
  image,
  techStack,
  website,
  moreImages,
  title,
}) => {
  console.log('HERR 1' , description , techStack )
  return (
    <li
      key={"admin@gmail"}
      className=" rounded-lg bg-[#232222] text-center shadow pb-8"
    >
      <div className="flex flex-1 flex-col p-8">
        <img
          className="mx-auto h-[350px] w-[450px]   "
          src={image ?? ams}
          alt=""
        />
        <h3 className="mt-6 text-2xl font-medium text-white">
          {title ?? "AMS"}
        </h3>
        <div className="mt-3 mb-3">
          {techStack && techStack.length > 0 ? (
            techStack.map((tech) => (
              <span className="inline-flex items-center bg-[linear-gradient(90.21deg,rgba(170,54,124,0.5)_-5.91%,rgba(74,47,189,0.5)_111.58%)] rounded-full px-3 py-1.5 text-base font-medium text-white mr-3 mb-3">
                {tech ?? "Software"}
              </span>
            ))
          ) : (
            <span className="inline-flex items-center bg-[linear-gradient(90.21deg,rgba(170,54,124,0.5)_-5.91%,rgba(74,47,189,0.5)_111.58%)] rounded-full px-3 py-1.5 text-base font-medium text-white ">
              {"Software"}
            </span>
          )}
        </div>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-lg text-[#B8B8B8]">
            {description ??
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`}
          </dd>
          <dt className="sr-only">Role</dt>
        </dl>
      </div>
      <div className="mb-3">
        {website && (
          <a
            href={website}
            target="_blank"
            className="inline-flex items-center rounded-sm no-underline bg-[linear-gradient(90.21deg,rgba(170,54,124,0.5)_-5.91%,rgba(74,47,189,0.5)_111.58%)] px-3 py-1.5 text-lg font-semibold text-white mr-4 "
          >
            {"Visit Website "}
          </a>
        )}
        {moreImages && (
          <a
            href={moreImages}
            target="_blank"
            className="inline-flex items-center rounded-sm no-underline bg-[linear-gradient(90.21deg,rgba(170,54,124,0.5)_-5.91%,rgba(74,47,189,0.5)_111.58%)] px-3 py-1.5 text-lg font-semibold text-white "
          >
            {"More Images"}
          </a>
        )}
      </div>
    </li>
  );
};

export default ProjectDetails;
