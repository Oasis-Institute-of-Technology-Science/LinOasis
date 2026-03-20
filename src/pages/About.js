import React from 'react';
import Card from '../components/Card';
import '../assets/styles/pages/About.scss';

const About = () => {
  const teamMembers = [
    {
      name: 'Ceaser Zhao',
      role: 'Founder & Lead Developer',
      description: 'OITS团队成员，负责项目整体架构和核心功能开发'
    },
    {
      name: '团队成员1',
      role: 'Frontend Developer',
      description: '负责前端界面和交互设计'
    },
    {
      name: '团队成员2',
      role: 'Data Scientist',
      description: '负责算法实现和数据可视化'
    }
  ];

  const techStack = [
    'React 18',
    'Redux',
    'D3.js',
    'Three.js',
    'Webpack',
    'Babel',
    'SASS',
    'React Router'
  ];

  return (
    <div className="about-page">
      <div className="container">
        <h1>关于我们</h1>
        <p className="subtitle">探索线性代数和机器学习的交互式平台</p>

        <section className="project-intro">
          <h2>项目介绍</h2>
          <Card>
            <p>
              LinOasis是一个专注于线性代数和机器学习教育的交互式平台。我们致力于通过可视化和互动体验，
              帮助用户更直观地理解复杂的数学概念和算法原理。
            </p>
            <p>
              项目旨在为学生、教育工作者和专业人士提供一个易于使用的工具，通过实践操作加深对线性代数和
              机器学习的理解，从而提高学习效率和教学质量。
            </p>
          </Card>
        </section>

        <section className="team">
          <h2>团队成员</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <Card key={index} className="team-card">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p>{member.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="tech-stack">
          <h2>技术栈</h2>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item">
                {tech}
              </div>
            ))}
          </div>
        </section>

        <section className="contact">
          <h2>联系方式</h2>
          <Card>
            <p>邮箱: contact@linoasis.com</p>
            <p>GitHub: <a href="https://github.com/ceaserzhao/LinOasis" target="_blank" rel="noopener noreferrer">github.com/ceaserzhao/LinOasis</a></p>
            <p>作者: ceaserzhao(OITS)</p>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;