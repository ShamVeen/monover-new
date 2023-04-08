import axios from "axios"
import React, { useState, useEffect } from "react"
import { useAlert } from "react-alert"
import ReactDataSheet from "react-datasheet"
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router"
import { url } from "../../GlobalUrl"
import ScreenTop from "../mobileComp/ScreenTop"
import Top from "../Top"
import "./DatatableStyles.css"
import MaterialTable from "material-table"
import VisibilityIcon from '@material-ui/icons/Visibility';



function Excel(props) {

  // 

  // 

  let navigate = useNavigate();

  const subProject_id = props.dataDeal;
  const [columns, set_columns] = useState([
    // { title: "Document name", field: "document_name", editable : true },
  ])
  // 
  // console.log(columns)
  //  identical columns  state hooks
    
  // 
  const [data, set_data] = useState([])
  
  const [loading, set_loading] = useState(true)

  const { id, sub_project_name } = useParams()
  const [state, setState] = useState({
    documents: []
  })

  const alert = useAlert()

  const handleChange = (obj) => {
    return setState({
      ...state,
      ...obj
    })
  }


  const get_sub_project_documents = () => {

    set_loading(true)
    
    // console.log('subproject ud',subProject_id)
    // console.log('subproject ud',props)



    return axios.get(`${url}/api/subproject/${props.id}/document/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        } 

      }).then((resp) => {
          // set state
          
        handleChange({ documents: resp.data })
        // 
        console.log(resp.data)
        // 
        const length = ( (resp.data) ? resp.data.length : 0 );

        if(length > 0){
          var temp_data = []
          temp_data = columns.map( (value) => (value ))

          // change columns
          resp.data.forEach( ( value,index ) => {
            
            Object.keys(value.document_content.SummaryFields).forEach((each,ind) => {
                
              if (!each.match('^[0-9]+$')){
                  temp_data.push( { title:each,field:each,editable:true } )
                }
                
            })
          })
            
          temp_data = temp_data.filter((a, i) => temp_data.findIndex((s) => a.field === s.field) === i) 
            // new columns
            // 
         
            let editable = true;
            let identicalColumns = ['Document name',...new Set(temp_data.map((item)=>item.title))]
            let  identicalFields =['document_name', ...new Set(temp_data.map((item)=>item.field))] 
          //  
          const newArr = temp_data.map((item,index)=>{
            return{
              ...item,
              title : identicalColumns[index],
             field: identicalFields[index],
             editable:editable,
            }
          })
          // 
          console.log(newArr)
            // 
            // console.log(temp_data)
          set_columns([...newArr])
      }
          

          // make changes to column data
          resp.data.forEach((doc, index) => {
            const prev_column_data = data
            const row = {}

            row.id = doc.id
            row.document_name = doc.document_name

            for (var key in doc.document_content.SummaryFields) {
                row[key] = doc.document_content.SummaryFields[key] 
               

            }

            if (!doc.document_content) {
              alert.error(`No document content found for ${doc.document_name}`)
            }
            
            prev_column_data.push(row)
            // setting table data 
            console.log('row',row)
            set_data(prev_column_data)
          })
          set_loading(false)
      })
      .catch((err) => {
          console.error('error is here',err)
          set_loading(false)
          alert.error("Failed to load sub projects ,some error")
      })
  }

  useEffect(() => {
    
    get_sub_project_documents()
    
  }, [])

  return (
    <div className="main" style={{ width: "100%" }}>

      <h1 style={{ marginTop: "20px", fontWeight: "500", fontSize: "32px" }}>{sub_project_name}</h1>
      <MaterialTable
        style = {{ margin: "auto" ,height:'100%',width:'100%'}}
        key = { JSON.stringify(columns) + JSON.stringify(data) }
        isLoading = {loading}
        title = {sub_project_name}
        columns={columns}
        data = {data}
        localization = {{
            pagination: {
              labelDisplayedRows: '{from}-{to} of {count}'
            },
            toolbar: {
              nRowsSelected: '{0} row(s) selected'
            },
            header: {
              actions: 'View'
            },
            body: {
              emptyDataSourceMessage: 'No records to display',
              filterRow: {
                filterTooltip: 'Filter'
              }
            }
        }}
        actions={[
          {
            icon: () => <VisibilityIcon />,
            tooltip: 'View',
            onClick: (event, rowData) => {
              navigate.push(`/document-details/${rowData.id}`);
            }

          }
        ]}
        options={{
          exportButton: true
        }}
      />
    </div>
  )
}

export default Excel
