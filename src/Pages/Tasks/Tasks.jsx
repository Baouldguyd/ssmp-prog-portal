import Sidebar from '../../Components/Sidebar'
import { AudioOutlined, PlusOutlined  } from '@ant-design/icons';
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
    <div className='flex  w-[118rem]'>
        <Sidebar/>
        <div className='w-[118rem]'>
        <div className=' flex flex-col mt-8 ml-4'>
        <h1 className=' font-semibold text-2xl'>Tasks</h1>
        </div>
        <div className=' w-[100%] flex justify-between mt-8 ml-4 bg-red-400 '>
        <Button className=' flex bg-blue-600 hover:!bg-blue-400 hover:!text-black h-[2.5rem]  text-white'> <span className=' mt-[.2rem]'>Create Tasks</span> <div className=' mb-[.5rem]'><PlusOutlined /></div> </Button>
        
          <Search
        className=' align-left md:w-[20rem] float-right '
        placeholder="Search Tasks"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
        />
        </div>

        </div>
    </div>
  )
}

export default Tasks