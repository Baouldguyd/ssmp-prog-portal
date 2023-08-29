import Sidebar from '../../Components/Sidebar'
import { AudioOutlined, PlusOutlined  } from '@ant-design/icons';
import { Button,Input,Select } from 'antd'


const {Search} = Input

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

function Tasks() {
  
const onSearch = (value) => console.log(value);
  return (
    <div className='flex   '>
        <Sidebar/>
        <div className=' md:w-full'>
        <div className=' flex flex-col mt-8 ml-4'>
        <h1 className=' font-semibold text-2xl'>Tasks</h1>
        </div>
        <div className=' flex justify-between mt-8  ml-[4rem]'>
        <Button className=' flex bg-blue-600 hover:!bg-blue-400 hover:!text-black h-[2.5rem]  text-white'> <span className=' mt-[.2rem]'>Create Tasks</span> <div className=' mb-[.5rem]'><PlusOutlined /></div> </Button>
        

        <Select>
          <Select.Option></Select.Option>
        </Select>
        <div className=' align-left  md:w-[13.4rem] mr-[3.5rem] float-right '>
          <Search
        className=' align-left bg-blue-600  float-right '
        placeholder="Search Tasks"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
        /></div>
        </div>

        </div>
    </div>
  )
}

export default Tasks