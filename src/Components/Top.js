import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navlinks/Projects.module.css";
import search from "../images/Search.png";
import MenuIcon from "./menuIcon";
import User from "./User";
import axios from "axios";
import { url } from "../GlobalUrl";
import "./Top.css";
import star2 from "../images/upload.png";
import upload2 from "../images/upload2.png";
// import team2 from "../images/team.png"
// import { connect } from "react-redux"
import { VscOpenPreview } from "react-icons/vsc";
import { FiUpload } from "react-icons/fi";
import { RiFileSearchLine } from "react-icons/ri";

import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AiFillEye, AiOutlineFileJpg } from "react-icons/ai";
import { GrDocumentPdf } from "react-icons/gr";

import Select from 'react-select';
import WordIcon from "../images/word-file.png";
import TextIcon from "../images/text-file.png";
import InvalidIcon from "../images/invalid-file.png";

const Top = (props) => {
  const [searchq, setSearchq] = useState('');
  const [clicked, setClicked] = useState(false);
  const [items, setItems] = useState([]);
  const token = localStorage["token"];
  const orgId = localStorage["orgId"];
  const dispatch = useDispatch();
  const [joinedOrganisation, setJoinedOrganisation] = useState([]);
  const [ownedOrganisation, setOwnedOrganisation] = useState([]);
  const [selectedOrgValue, setSelectedOrgValue] = useState();
  const [selectedOrgLabel, setSelectedOrgLabel] = useState();



  useEffect(() => {
    organisationListAPI();
  }, []);

  useEffect(() => {
    orgLoad();
  }, [ownedOrganisation, selectedOrgValue, selectedOrgLabel]);

  const document_details = (id) => {
    localStorage["documentId"] = id;
    window.location.assign(`/document-details/${id}`);
  };

  const organisationListAPI = async () => {
    await axios
      .get(url + "/api/organisation/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {

        dispatch({
          type: "SetOrg",
          org: parseInt(
            parseInt(res.data?.joined_organisation.length) +
            parseInt(res.data?.owned_organisation.length)
          ),
        });
        // this.props.setOrg(parseInt(res.data?.joined_organisation)+parseInt(res.data?.owned_organisation))

        if (res.data.joined_organisation) {
          localStorage.setItem(
            "joined_org",
            res.data.joined_organisation.length
          );
          setJoinedOrganisation(res.data.joined_organisation);
        }
        if (res.data.owned_organisation) {
          localStorage.setItem("own_org", res.data.owned_organisation.length);

          setOwnedOrganisation(res.data.owned_organisation);
          //       localStorage.setItem("orgId", id);
          // localStorage.setItem("orgName", orgName);
        
          if (!localStorage.getItem("orgId")) {
            selectedOrganisation(
              res.data.owned_organisation[0].id,
              res.data.owned_organisation[0].name
            );
          }
        }
      
      })
      .catch((err) => {
        console.log("Error Aaya", err);
      });
  };

  const membersListAPI = async () => {
    await axios
      .get(
        url + `/api/user/organisation/members/${localStorage.getItem("orgId")}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        //console.log(res.data);
        localStorage.setItem("members_count", res.data.length);
        dispatch({ type: "SetMembers", members: parseInt(res.data.length) });
        // this.props.setMembers(res.data.length);
        // localStorage.setItem('members_count',res.data.length);
        console.log("Members API", res.data);
        window.location.replace("/review");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const changeOrganization = (name) => {
    dispatch({
      type: "Change",
      payload: name,
    });
  };

  const selectedOrganisation = (id, orgName) => {
  
    localStorage.setItem("orgId", id);
    localStorage.setItem("orgName", orgName);
    changeOrganization(orgName);
    // if (boxColor == "none") {
    //   console.log("Phase 1");
    //   setBoxColor("0px 0px 11px 0px rgba(0,0,0,0.75)");
    // } else {
    //   console.log("Phase 2");
    //   setBoxColor("none");
    // }
    // props.setOrg();
  };

  const gotoProjects = () => {
    window.location.replace("/review");
  };

  const handleSearch = (e) => {
    setSearchq(e.target.value);
    // setSearchq(e.target.value);
    // alert(e.target.value)
   
    if (e.target.value === "") {
      setClicked(false);
      setItems([]);
      return;
    }

    if (!e.target.value) {
      setClicked(false);
      setItems([]);
      return;
    }
    if(searchq=='')
    {}
    else if(e.target.value === 'Enter')
    console.log('do validate');
  
    {
      // var Input = React.createClass({
      //   render: function () {
      //     return <input type="text" onKeyDown={this._handleKeyDown} />;
      //   },
      //   _handleKeyDown: function(e) {
      //     if (e.key === 'Enter') {
      //       console.log('do validate');
      //     }
      //   }
      // });
      
   
    const body = { organisation_id:orgId, query:searchq };

    axios
      .post(url + "/api/search/", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res)
        if (res.data && res.data.length > 0) {
          setClicked(true);
        }
        setItems(res.data);
      })
      .catch((err) => console.log(err));
  };

  if (clicked) {
    // window.onscroll = function () { window.scrollTo(0, 0); };
  } else {
    window.onscroll = function () { };
  }

  }

  const selectOptions = []
  const orgLoad = () => {
    ownedOrganisation.map((org, i) =>{
        if(localStorage.getItem("orgName"))  {
            if(org.name === localStorage.getItem("orgName") && !(window.location.href.includes("/Organisation")) ){
                // selectedOrgValue = org.id
                // selectedOrgLabel = org.name
                setSelectedOrgValue(org.id)
                setSelectedOrgLabel(org.name)
                // alert("OrggggName: "+selectedOrgValue)
            }else{
                // selectedOrgValue = org.id
                // selectedOrgLabel = org.name
                setSelectedOrgValue(org.id)
                setSelectedOrgLabel(org.name)
                
            }
            // 
        }else if(i === 0 && !(window.location.href.includes("/Organisation")) ){
            // selectedOrgValue = org.id
            // selectedOrgLabel = org.name
            setSelectedOrgValue(org.id)
            setSelectedOrgLabel(org.name)

            
        }else{
            // selectedOrgValue = org.id
            // selectedOrgLabel = org.name  
            setSelectedOrgValue(org.id)
            setSelectedOrgLabel(org.name)

        }
          selectOptions.push({
              value: org.id,
              label: org.name
          })
      })
      
      selectOptions.push({
          value: 'allOrgs',
          label: 'All organizations'
      })
    
  }
  return (
    <>
      <div className={classes.top}>
        <div style={{ display: "flex" }}>
          <span
            style={{
              fontSize: "24px",
              fontWeight: "700",
              cursor: "pointer",
              margin: "15px",
            }}
            onClick={() => gotoProjects()}
          >
            MONOVER
          </span>
          <div>
          <Select
          className={classes.basic_single}
          classNamePrefix="select"
          defaultValue={{value: selectedOrgValue, label: selectedOrgLabel}}
          name="orgination"
          options={selectOptions}
        />
          </div>
        </div>

        {/* <MenuIcon /> */}
        <span>
          <img src={search} alt="search" />
          <input
            id="search-box"
            placeholder="Search"
            // value ={props.pvalue ? props.pvalue : ''}
            onChange={(e) => {props.ponChange ? props.ponChange(e): handleSearch(e)}}
            className={classes.input}
            style={{ zIndex: 1 }}
          />
          {clicked && (
            <div className="modal-search">
              {items.map((each) => (
                <div
                  className="item d-flex"
                  onClick={() => {
                    document_details(each.id);
                  }}
                 
                >
                  <RiFileSearchLine fontSize={25}/>
                  <div className=" ml-2 ms-2">
                     <p className="ml-2 ms-2">{each.document_name}</p>
                     <p className="ms-auto align-items-center fs-13" >Documents</p>
                  </div>
                
                </div>
              ))}
            </div>
          )}
        </span>

        {clicked && (
          <div
            onClick={() => {
              setClicked(!clicked);
            }}
            className="background"
          ></div>
        )}

        <User />
      </div>

     {window.location.href.includes("/DragAndDrop") && (
        <div className="links">
          {!window.location.href.includes("/DragAndDrop") && (
            <Card
              style={{
                width: "125px",
                marginTop: "3px",
                marginRight: "10px",
                color: "black",
                border: "none",
              }}
            >
              <Card.Body style={{ padding: "10px" }}>
                <NavLink
                  to="/DragAndDrop"
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                
                >
              
                  <FiUpload style={{ marginRight: "4px" }} size={20} />
                  <span style={{ margin: "0px",fontWeight:100,color:'white',background:'' }}>
                    <p>Upload</p>
                  </span>
                </NavLink>
              </Card.Body>
            </Card>
          )} 
          {!window.location.href.includes("/review") && (
            <Card style={{ width: "125px", marginTop: "3px", border: "none" }}>
              <Card.Body style={{ padding: "10px" }}>
                <NavLink
                  to="/review"
                  activeClassName="active"
                  exact
                  style={{ textDecoration: "none" }}
                >
                  <VscOpenPreview style={{ marginRight: "4px" }} size={20} />
                  <span style={{ margin: "0px" }}>
                    <strong>Review</strong>
                  </span>
                </NavLink>
              </Card.Body>
            </Card>
          )}
        </div>
      )}
    </>
  );
};

export default Top;
