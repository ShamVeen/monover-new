import React from 'react';
import preview from '../images/preview.png';
import eye from '../images/icons/eye.svg';
import previewPlaceholder from '../images/preview-placeholder.png';
import folderIcon from '../images/icons/folder.svg';
import folderFilled from '../images/icons/folder-filled.svg';


function RightSidebar() {
  return (
    <div>
         {/* <div class="right-sidebar">
            <div class="panel">
              <div class="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                <div class="">
                  <h4 class="panel-title mb-0">orders</h4>
                </div>
                <div class="panel-action">
                  <a href="" class="btn btn-primary me-2">
                    <svg
                      class="me-3"
                      width="13"
                      height="14"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                        fill="white"
                      />
                    </svg>
                    Upload File
                  </a>
                </div>
              </div>
              <div class="panel-content d-flex justify-content-between flex-wrap align-items-start px-4 pt-4 py-5">
                <div class="panel-doc-preview p-1 mb-3">
                  <div>
                    <img class="img-fluid" src="images/preview.png" alt="" />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
                <div class="panel-doc-preview p-1">
                  <div>
                    <img
                      class="img-fluid"
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
                <div class="panel-doc-preview p-1">
                  <div>
                    <img
                      class="img-fluid"
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                <div class="">
                  <h4 class="panel-title mb-0">recently viewed</h4>
                </div>
                <div class="panel-action">
                  <a href="" class="btn btn-primary me-2">
                    <svg
                      class="me-3"
                      width="13"
                      height="14"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                        fill="white"
                      />
                    </svg>
                    Upload File
                  </a>
                </div>
              </div>
              <div class="panel-content d-flex justify-content-between flex-wrap align-items-start px-4 pt-4 py-5">
                <div class="panel-doc-preview p-1">
                  <div>
                    <img
                      class="img-fluid"
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
                <div class="panel-doc-preview p-1">
                  <div>
                    <img
                      class="img-fluid"
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
                <div class="panel-doc-preview p-1">
                  <div>
                    <img
                      class="img-fluid"
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                <div class="">
                  <h4 class="panel-title mb-0">folders</h4>
                </div>
              </div>
              <div class="panel-content d-flex flex-wrap align-items-start px-4 pt-4 py-5">
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img
                    class="img-fluid"
                    src="images/icons/folder-filled.svg"
                    alt=""
                  />
                  <span class="pt-2">Folder1</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder2</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder3</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder4</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder5</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder6</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder4</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder5</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder6</span>
                </div>
              </div>
            </div>
          </div> */}

          <div className="right-sidebar">
              <div className="panel">
                <div className="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                  <div className="">
                    <h4 className="panel-title mb-0">orders</h4>
                  </div>
                  <div className="panel-action">
                    <a href="" className="btn btn-primary me-2">
                      <svg
                        className="me-3"
                        width="13"
                        height="14"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                          fill="white"
                        />
                      </svg>
                      Upload File
                    </a>
                  </div>
                </div>
                <div className="panel-content d-flex justify-content-between flex-wrap align-items-start px-4 pt-4 py-5">
                  <div className="panel-doc-preview p-1 mb-3">
                    <div>
                      <img className="img-fluid" src={preview} alt="" />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                  <div className="">
                    <h4 className="panel-title mb-0">recently viewed</h4>
                  </div>
                  <div className="panel-action">
                    <a href="" className="btn btn-primary me-2">
                      <svg
                        className="me-3"
                        width="13"
                        height="14"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                          fill="white"
                        />
                      </svg>
                      Upload File
                    </a>
                  </div>
                </div>
                <div className="panel-content d-flex justify-content-between flex-wrap align-items-start px-4 pt-4 py-5">
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                  <div className="">
                    <h4 className="panel-title mb-0">folders</h4>
                  </div>
                  <div className="panel-action"></div>
                </div>
                <div className="panel-content d-flex flex-wrap align-items-start px-4 pt-4 py-5">
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderFilled} alt="" />
                    <span className="pt-2">Folder1</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder2</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder3</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder4</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder5</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder6</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder4</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder5</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder6</span>
                  </div>
                </div>
              </div>
            </div>
          
    </div>
  )
}

export default RightSidebar