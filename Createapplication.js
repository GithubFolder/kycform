import React, { useState } from 'react';
import * as S from './Createapplicationstyle';

import Layout from 'components/layout/Layout';
import { Label } from '@progress/kendo-react-labels';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Upload } from '@progress/kendo-react-upload';

import { Button } from '@progress/kendo-react-buttons';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import {HiOutlineUpload} from 'react-icons/hi';

const Uploadex = () => {
  const data = ['Adharcard', 'VoterId', 'Driving License'];

  const [selected, setSelected] = React.useState(1);
  const handleSelect = e => {
    setSelected(e.selected);
  };



  const add = () => {
    return (
      <div>
        <HiOutlineUpload  size={'20px'} />
      </div>
    );
  };
  const saveUrl = '';
  const removeUrl = '';

  return (
    <Layout>
      <div className="content-start transition">
        <div className="container-fluid dashboard">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <S.ProspectHead>
                <S.Heading>Applicant Details</S.Heading>
                <div className="right-button">
                  <Button className="reset-btn">
                    <span className="new-lead-text">
                      ADD TO CO APPLICANT/GUARANTOR
                    </span>
                  </Button>
                </div>
              </S.ProspectHead>
              </div>
          </div>

              <S.TabCard>
              <div>
                <TabStrip selected={selected} onSelect={handleSelect}>
                  <TabStripTab title="KYC">
                    <div  className='mainalign'>                    
                    <div className='align1'>
                      <Label>Address Proof</Label>
                      <DropDownList
                        defaultItem={'Select Proof Type'}
                        style={{ marginBottom: '20px' }}
                        data={data}
                      />


                      <Label>Upload Document</Label>
                      <Upload 
                      placeholder = {"Select The File"}
                       selectMessageUI={add}
                        batch={true}
                        defaultFiles={[]}
                        withCredentials={false}
                        saveUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/save'
                        }
                        // removeUrl={
                        //   'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
                        // }
                      />
                      </div>

                      <div>
                      <Label>Identity Proof</Label>
                      <DropDownList
                        defaultItem={'Select Proof Type'}
                        style={{ marginBottom: '20px' }}
                        data={data}
                      />

                      <Label>Upload Document</Label>
                      <Upload
                      selectMessageUI={add}
                        icon="upload"
                        batch={true}
                        defaultFiles={[]}
                        withCredentials={false}
                        saveUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/save'
                        }
                        // removeUrl={
                        //   'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
                        // }
                      />
                     </div>

                    </div>



                    <div 
                    // style={{
                    //     display:flex;
                    //   flex-direction:row;
                    //   justify-content:space-between;
                    // padding-bottom:50px;
                    // }}
                    className='mainalign'
                    >                    
                    <div className='align1'>
                      <Label>pan Card</Label>
                      <DropDownList
                        defaultItem={'Select Proof Type'}
                        style={{ marginBottom: '20px'}}
                        data={data}
                      />


                      <Label>Upload Document</Label>
                      <Upload
                      selectMessageUI={add}
                        batch={true}
                        defaultFiles={[]}
                        withCredentials={false}
                        saveUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/save'
                        }
                        // removeUrl={
                        //   'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
                        // }
                      />
                      </div>

                      <div style={{width:"420px"}}>
                      <Label>Validation & Consent For Co Applicant</Label>
                      <DropDownList
                        defaultItem={'Select Proof Type'}
                        style={{ marginBottom: '20px' }}
                        data={data}
                      />

                      <Label>Upload Document</Label>
                      <Upload
                      placeholder = "Upload the document"
                      selectMessageUI={add}
                        icon="upload"
                        batch={true}
                        defaultFiles={[]}
                        withCredentials={false}
                        saveUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/save'
                        }
                        // removeUrl={
                        //   'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
                        // }
                      />
                     </div>

                    </div>



                  </TabStripTab>
                  <TabStripTab title="Lead Information"></TabStripTab>
                  <TabStripTab title="Dedupe Check"></TabStripTab>
                </TabStrip>
              </div>
              <Button className='btn'>Bureau Report</Button>
              </S.TabCard> 
        </div>
      </div>
    </Layout>
  );
};

export default Uploadex;
