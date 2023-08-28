import Sidebar from '../../Components/Sidebar'
import { AudioOutlined } from '@ant-design/icons';
import { Button,Input } from 'antd'

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
    <div className='flex'>
        <Sidebar/>
        <div className=' flex flex-col mt-8 ml-4'>
        <h1 className=' font-semibold text-2xl'>Tasks</h1>
        
        <div className=' flex justify-evenly items-center  mt-8 ml-4 '>
        <Button className=' bg-blue-600 hover:!bg-blue-400 hover:!text-black h-[2.5rem]  text-white'>Create Tasks</Button>
        <div className=' flex justify-end'>
          <Search
        className=' align-left md:w-[20rem] '
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