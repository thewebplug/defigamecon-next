"use client"
import {  Badge } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import Sidebar from "@/app/components/admin/Sidebar";
import { useForm } from "react-hook-form";
import { getEvent, updateEvent } from "@/app/apis";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import fileUpload from "@/app/utils/fileUpload";
import OptimizedImage from "@/app/components/optimizedImage";

const EditEvent = () => {
  const auth = useSelector((state) => state.auth);
  const {id} = useParams();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();


  const [videoLoading, setVideoLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [bannerLoading, setBannerLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState("");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const mediaRef = useRef(null);

  // useEffect(() => {
  //   // let dropArea = document.getElementById("drop-area");
  //   let uploadArea = document.querySelector(".reg_student-area");
  //   ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  //     uploadArea.addEventListener(eventName, preventDefaults, false);
  //   });

  //   function preventDefaults(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //   }

  //   ["dragenter", "dragover"].forEach((eventName) => {
  //     uploadArea.addEventListener(eventName, highlight, false);
  //   });
  //   ["dragleave", "drop"].forEach((eventName) => {
  //     uploadArea.addEventListener(eventName, unhighlight, false);
  //   });

  //   function highlight(e) {
  //     uploadArea.classList.add("highlight");
  //   }

  //   function unhighlight(e) {
  //     uploadArea.classList.remove("highlight");
  //   }

  //   uploadArea.addEventListener("drop", handleDrop, false);

  //   function handleDrop(e) {
  //     fileUploadAndResizeImage(e.dataTransfer.files[0]);
  //     console.log("e.dataTransfer", e.dataTransfer.files);
  //   }
  // }, []);

  const handleMediaAssetRemove = (id, setListItem, dataType) => {
    if(dataType === "string"){
      setListItem(null);
    }else {
      setListItem((prev) => prev.filter((item) => item?.public_id !== id));
    }
  };

  const onSubmit = async (data) => {
    if (images?.length < 1) {
      alert("Please include images of the past edition of this event");
      return;
    } else if (banner?.length < 1) {
      alert("Please include a banner for this event");
      return;
    } else if (videos?.length < 1) {
      alert("Please include videos of the past edition of this event");
      return;
    } else if (selectedCategories?.length < 1) {
      alert("Please select categories for this event");
      return;
    }
    setLoading(true);

    const response = await updateEvent(
      id, 
      {
        ...data,
        banner,
        images,
        videos,
        categories: selectedCategories,
      },
      auth?.token
    );

    // console.log("response", response);

    if (response?.status === 200) {
      alert(response?.data?.message);
      router.push("/admin/events")
      reset();
    } else {
      alert("Something went wrong please try again");
    }
    setLoading(false);
  };

  const handleAddToArray = (value) => {
    // console.log("deyyahe", category);

    const temp = selectedCategories?.filter((item) => item === value);
    // console.log("temp", temp);
    if (!temp?.length > 0) {
      setSelectedCategories([...selectedCategories, value]);
      setCategory("");
    }
  };

  
    const handleGetEvent = async () => {
      const response = await getEvent(id);
      // console.log('getEvent', response);
      
      reset(response);
      setImages(response?.images)
      setVideos(response?.videos)
      setBanner(response?.banner)
      setSelectedCategories(response?.categories)
    } 
  
    useEffect(() => {
      handleGetEvent();
    }, [])

  return (
    <div className="admin-form">
      <Sidebar />

      <div className="admin-form__main">
        <Link prefetch={true} href="/admin/events">
        <svg
          className="admin-form__main__svg"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#000000"
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            ></path>
            <path
              fill="#000000"
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            ></path>
          </g>
        </svg>
        </Link>
        <h1 className="admin-form__main__title">Edit event</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="admin-form__main__form"
        >
          <div className="admin-form__main__form__flex">
            <div>
              <label htmlFor="poemTitle">Title</label>
              <input
                required
                type="text"
                id="poemTitle"
                name="poemTitle"
                {...register("title")}
              />
            </div>
            <div>
              <label htmlFor="poemTitle">Categories</label>
              <select
                name=""
                id=""
                value={category}
                onChange={(e) => {
                  handleAddToArray(e.target.value);
                }}
              >
                {/* This should be a multi selection */}
                {/* categories should limited to 5 */}
                <option value="">Select category</option>
                <option value="Gaming">Gaming</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Tech">Tech</option>
                <option value="Web3">Web3</option>
              </select>
              <div className="admin-form__main__form__flex__selected-items">
              {selectedCategories?.map((item, index) => (
                <div key={index} >{item}</div>
              ))}
              </div>

             
            </div>

            <div>
              <label htmlFor="poemTitle">Venue</label>
              <input
                required
                type="text"
                id="poemTitle"
                name="poemTitle"
                {...register("venue")}
              />
            </div>

            <div>
              <label htmlFor="poemTitle">Description</label>
              <textarea
                name=""
                id=""
                placeholder="Tell us more about your event"
                {...register("description")}
              ></textarea>
            </div>

            <div>
              <label htmlFor="poemTitle">Date</label>
              <input
                required
                type="date"
                id="poemTitle"
                name="poemTitle"
                {...register("date", {
                  validate: (value) => {
                    const selectedDate = new Date(value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0); // Reset time to start of day

                    return selectedDate > today || "Date must be after today";
                  },
                })}
              />
              <div className="admin-form__main__form__flex__error">
                {errors?.date?.message}
              </div>
            </div>
            <div>
              <label htmlFor="">Time</label>
              <input
                required
                type="time"
                id="poemTitle"
                name="poemTitle"
                {...register("time")}
              />
            </div>
          </div>

          <label className="admin-form__main__form__upload-label">Event banner(maximum size allowed: 250kb)</label>

          <div className="admin-form__main__form__uploaded">
            {!!banner?.url && (
              <Badge
                overlap="circular"
                onClick={() => handleMediaAssetRemove(banner?.public_id, setBanner, "string")}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                badgeContent={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.12 6.98L17.02 2.88C16.54 2.4 15.58 2 14.9 2H9.1C8.42 2 7.46 2.4 6.98 2.88L2.88 6.98C2.4 7.46 2 8.42 2 9.1V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42 22 9.1 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.1C22 8.42 21.6 7.46 21.12 6.98ZM16.03 14.97C16.32 15.26 16.32 15.74 16.03 16.03C15.88 16.18 15.69 16.25 15.5 16.25C15.31 16.25 15.12 16.18 14.97 16.03L12 13.06L9.03 16.03C8.88 16.18 8.69 16.25 8.5 16.25C8.31 16.25 8.12 16.18 7.97 16.03C7.68 15.74 7.68 15.26 7.97 14.97L10.94 12L7.97 9.03C7.68 8.74 7.68 8.26 7.97 7.97C8.26 7.68 8.74 7.68 9.03 7.97L12 10.94L14.97 7.97C15.26 7.68 15.74 7.68 16.03 7.97C16.32 8.26 16.32 8.74 16.03 9.03L13.06 12L16.03 14.97Z"
                      fill="#292D32"
                    />
                  </svg>
                }
              >
                <div className="admin-form__main__form__uploaded__media"><OptimizedImage
                                  
                                  src={banner?.url}
                                  objectFit="cover"
                                  layout="fill"
                                /></div>
              </Badge>
            )}
          </div>
          <label className="admin-form__main__form__drop-area-container">
            {!bannerLoading && (
              <input
                type="file"
                multiple
                accept="image/*"
                hidden
                onChange={(e) =>
                  fileUpload(
                    e?.target?.files[0],
                    "string",
                    setBanner,
                    setBannerLoading,
                    "image",
                    auth
                  )
                }
                ref={mediaRef}
              />
            )}
            <div className="admin-form__main__form__drop-area-container__drop-area">
              <div className="admin-form__main__form__drop-area-container__drop-area__area">
                {bannerLoading ? (
                  <div>Loading...</div>
                ) : (
                  <div>
                    <div>Choose an image</div>
                    <div>or drag it here</div>
                  </div>
                )}
              </div>
            </div>
          </label>
         
          <label className="admin-form__main__form__upload-label">Images(Highlights)(maximum size allowed: 250kb)</label>

          <div className="admin-form__main__form__uploaded">
            {!!images &&
              images?.map((image, index) => ( !!image?.url &&
                <Badge
                key={index}
                  overlap="circular"
                  onClick={() => handleMediaAssetRemove(image?.public_id, setImages, "array")}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  badgeContent={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.12 6.98L17.02 2.88C16.54 2.4 15.58 2 14.9 2H9.1C8.42 2 7.46 2.4 6.98 2.88L2.88 6.98C2.4 7.46 2 8.42 2 9.1V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42 22 9.1 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.1C22 8.42 21.6 7.46 21.12 6.98ZM16.03 14.97C16.32 15.26 16.32 15.74 16.03 16.03C15.88 16.18 15.69 16.25 15.5 16.25C15.31 16.25 15.12 16.18 14.97 16.03L12 13.06L9.03 16.03C8.88 16.18 8.69 16.25 8.5 16.25C8.31 16.25 8.12 16.18 7.97 16.03C7.68 15.74 7.68 15.26 7.97 14.97L10.94 12L7.97 9.03C7.68 8.74 7.68 8.26 7.97 7.97C8.26 7.68 8.74 7.68 9.03 7.97L12 10.94L14.97 7.97C15.26 7.68 15.74 7.68 16.03 7.97C16.32 8.26 16.32 8.74 16.03 9.03L13.06 12L16.03 14.97Z"
                        fill="#292D32"
                      />
                    </svg>
                  }
                >
                  <div className="admin-form__main__form__uploaded__media"><OptimizedImage
                                    
                                    src={image?.url}
                                    objectFit="cover"
                                  layout="fill"
                                  /></div>
                </Badge>
              ))}
          </div>
          <label className="admin-form__main__form__drop-area-container">
            {!imageLoading && (
              <input
                type="file"
                multiple
                accept="image/*"
                hidden
                onChange={(e) =>
                  fileUpload(
                    e?.target?.files[0],
                    "array",
                    setImages,
                    setImageLoading,
                    "image",
                    auth
                  )
                }
                ref={mediaRef}
              />
            )}

            <div className="admin-form__main__form__drop-area-container__drop-area">
              <div className="admin-form__main__form__drop-area-container__drop-area__area">
                {imageLoading ? (
                  <div>Loading...</div>
                ) : (
                  <div>
                    <div>Choose an image</div>
                    <div>or drag it here</div>
                  </div>
                )}
              </div>
            </div>
          </label>
         
          <label className="admin-form__main__form__upload-label">Videos(Highlights)(maximum size allowed: 15mb)</label>

          <div className="admin-form__main__form__uploaded">
            {!!videos &&
              videos?.map((video, index) => (
                <Badge
                key={index}
                  overlap="circular"
                  onClick={() => handleMediaAssetRemove(video?.public_id, setVideos, "array")}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  badgeContent={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.12 6.98L17.02 2.88C16.54 2.4 15.58 2 14.9 2H9.1C8.42 2 7.46 2.4 6.98 2.88L2.88 6.98C2.4 7.46 2 8.42 2 9.1V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42 22 9.1 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.1C22 8.42 21.6 7.46 21.12 6.98ZM16.03 14.97C16.32 15.26 16.32 15.74 16.03 16.03C15.88 16.18 15.69 16.25 15.5 16.25C15.31 16.25 15.12 16.18 14.97 16.03L12 13.06L9.03 16.03C8.88 16.18 8.69 16.25 8.5 16.25C8.31 16.25 8.12 16.18 7.97 16.03C7.68 15.74 7.68 15.26 7.97 14.97L10.94 12L7.97 9.03C7.68 8.74 7.68 8.26 7.97 7.97C8.26 7.68 8.74 7.68 9.03 7.97L12 10.94L14.97 7.97C15.26 7.68 15.74 7.68 16.03 7.97C16.32 8.26 16.32 8.74 16.03 9.03L13.06 12L16.03 14.97Z"
                        fill="#292D32"
                      />
                    </svg>
                  }
                >
                  <video className="admin-form__main__form__uploaded__media" src={video?.url}></video>
                </Badge>
              ))}
          </div>
          <label className="admin-form__main__form__drop-area-container">
            {!videoLoading && (
              <input
                type="file"
                multiple
                accept="video/*"
                hidden
                onChange={(e) =>
                  fileUpload(
                    e?.target?.files[0],
                    "array",
                    setVideos,
                    setVideoLoading,
                    "video",
                    auth
                  )
                }
                ref={mediaRef}
              />
            )}
            <div className="admin-form__main__form__drop-area-container__drop-area">
              <div className="admin-form__main__form__drop-area-container__drop-area__area">
                {videoLoading ? (
                  <div>Loading...</div>
                ) : (
                  <div>
                    <div>Choose an image</div>
                    <div>or drag it here</div>
                  </div>
                )}
              </div>
            </div>
          </label>
          <button
            type="submit"
            disabled={loading || imageLoading || videoLoading || bannerLoading}
          >
            {loading ? "Loading..." : "Edit event"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
