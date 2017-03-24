package sxay.yzzc;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import sxay.yzzc.mapper.DemoMapper;
import sxay.yzzc.pojo.Demo;

/**
 * Hello world!
 *
 */
public class App {
	public static void main(String[] args) throws IOException {
		System.out.println("Hello World!");

		// mybatis 原生实例
		mybatisDemo();
		
		

	}

	/**
	 * mybatis 实例演练
	 * 
	 * @throws IOException
	 */
	public static void mybatisDemo() throws IOException {

		// 配置文件路径
		String path = "mybatis-config.xml";

		// 根据路径加载核心配置文件
		InputStream inputStream = Resources.getResourceAsStream(path);

		// 根据配置文件创建session工厂
		SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

		// 打开session
		SqlSession session = sqlSessionFactory.openSession();

		// 创建mapper实例
		DemoMapper demoMapper = session.getMapper(DemoMapper.class);
		
		
		
		Demo demo = demoMapper.selectByid(1);

	    List<Demo>  list=demoMapper.selectAll();  
		
		System.out.println(demo.getName()+"总记录数为："+list.size());

	}

}
