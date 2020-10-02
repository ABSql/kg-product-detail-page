import React from 'react';
import styled from 'styled-components';

const SloganHeader = styled.h1`
  padding-top: 10px;
  padding-left: 20px;
  font-size: 16px;
  font-style: bold;
  background: transparent;
`;

const SloganDesc = styled.div`
  padding-left: 20px;
  font-size: 14px;
  list-style: none;
`;

const Line = styled.section`
  border-left: 1px solid gray;
  height: 100px;
  position: absolute;
`;

const ColumnPadding = styled.section`
  padding-top: 20px;
`;

const SloganDescription = ({selected}) => {

  const FeatureRender = () => {
    if (selected.features !== undefined) { 
      return (
        selected.features.map((feature) => (
        <div>
          <li><b>{feature.feature}</b></li>
          <li>✓ {feature.value}</li>
        </div>
        )
      )
    )} else {
      return (<div>Loading Features...</div>);
    };
  }

  return (
    <div class="container">
      <div class="row">  
        <div class="col-sm-8">
          <SloganHeader>
            <p>{selected.slogan}</p>
          </SloganHeader>
          <SloganDesc>
            {selected.description}
          </SloganDesc>
        </div>
        <div class="col-sm-4">
          <ColumnPadding>
            <Line></Line>
            <SloganDesc>
              { FeatureRender() }
            </SloganDesc>
          </ColumnPadding>
        </div>
      </div>
    </div>
  )

};

export default SloganDescription;