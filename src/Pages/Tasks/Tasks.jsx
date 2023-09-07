import Sidebar from '../../Components/Sidebar'
import { AudioOutlined, PlusOutlined  } from '@ant-design/icons';
import { Button,Input,Select,Steps } from 'antd';
import Html from './HtmlQuestions';
import Css from './CssQuestions';
import JavaScript from './JavascriptQuestions';
import React from './ReactQuestions';
import CreateView from './CreateView';
import { useState } from 'react';



function Tasks() {
  const {Search} = Input
  const [currentStep, setCurrentStep] = useState(0);
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };
  const prev = () => {
    setCurrentStep(currentStep - 1);
  };
  const next = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleNextClick =  () => {
    try {
      
      setCurrentStep(currentStep + 1);
    } catch (errorInfo) {
      console.log(errorInfo);
    }
  };

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
  const steps = [
    
    {
      title: "Html",
      content: <Html/>,
    },
    {
      title: "Css",
      content: <Css />,
    },
    {
      title: "JavaScript",
      content: <JavaScript />,
    },
    {
      title: "React",
      content: <React/>,
    },
    // ... Add more steps as needed
  ];

  
const onSearch = (value) => console.log(value);
  return (
    <div className='flex   '>
        <Sidebar/>
        <div className=' md:w-full'>
        <header className=' flex flex-col mt-8 ml-4'>
        <h1 className=' font-semibold text-2xl'>Tasks</h1>
        </header>
        <section className=' flex justify-between mt-8  ml-[4rem]'>
          
        
        <div>
      <Button
      className=' flex bg-blue-600 hover:!bg-blue-400 hover:!text-black h-[2.5rem]  text-white'
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
       <span className=' mt-[.2rem]'>Create Tasks</span> <div className=' mb-[.5rem]'><PlusOutlined /></div> 
      </Button>
      <CreateView
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>

       
        <div className=' h-auto flex gap-4 align-left  md:w-[13.4rem] mr-[.3rem] float-right '>
          
        <Select>
          <Select.Option></Select.Option>
        </Select>

          <Search
        className=' align-left  '
        placeholder="Search Tasks"
        enterButton="Search"
        size="medium"
        suffix={suffix}
        onSearch={onSearch}
        /></div>
        </section>
        <section>
        <Steps
              current={currentStep}
              responsive={false}
              items={steps.map(step => ({ title: step.title }))}
              className="mt-5 ml-5 mb-5 md:mb-14  w-[76%]"
              onChange={stepIndex => setCurrentStep(stepIndex)}
            />
            </section>
           <section className='ml-5'>
            {steps[currentStep].content}
            </section>
        </div>
    </div>
  )
}

export default Tasks