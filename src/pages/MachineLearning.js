import React, { useState } from 'react';
import Card from '../components/Card';
import Visualization from '../components/Visualization';
import '../assets/styles/pages/MachineLearning.scss';

const MachineLearning = () => {
  const [activeTab, setActiveTab] = useState('supervised');

  const tabs = [
    { id: 'supervised', label: '监督学习' },
    { id: 'unsupervised', label: '无监督学习' },
    { id: 'neural', label: '神经网络' },
    { id: 'evaluation', label: '模型评估' }
  ];

  return (
    <div className="machine-learning-page">
      <div className="container">
        <h1>机器学习</h1>
        <p className="subtitle">探索机器学习算法和应用</p>

        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === 'supervised' && (
            <div className="supervised-learning">
              <div className="grid">
                <Card className="card">
                  <h3>线性回归</h3>
                  <p>用于预测连续值的基本回归算法</p>
                  <Visualization />
                </Card>
                <Card className="card">
                  <h3>逻辑回归</h3>
                  <p>用于分类问题的概率模型</p>
                  <Visualization />
                </Card>
                <Card className="card">
                  <h3>决策树</h3>
                  <p>基于树结构的分类和回归方法</p>
                  <Visualization />
                </Card>
                <Card className="card">
                  <h3>随机森林</h3>
                  <p>集成学习方法，提高预测准确性</p>
                  <Visualization />
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'unsupervised' && (
            <div className="unsupervised-learning">
              <div className="grid">
                <Card className="card">
                  <h3>K-均值聚类</h3>
                  <p>基于距离的聚类算法</p>
                  <Visualization />
                </Card>
                <Card className="card">
                  <h3>层次聚类</h3>
                  <p>构建聚类层次结构</p>
                  <Visualization />
                </Card>
                <Card className="card">
                  <h3>主成分分析</h3>
                  <p>降维技术，提取主要特征</p>
                  <Visualization />
                </Card>
                <Card className="card">
                  <h3>关联规则学习</h3>
                  <p>发现数据中的关联模式</p>
                  <Visualization />
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'neural' && (
            <div className="neural-networks">
              <div className="grid">
                <Card className="card">
                  <h3>感知器</h3>
                  <p>最简单的神经网络模型</p>
                  <Visualization />
                </Card>
                <Card className="card">
                  <h3>多层感知器</h3>
                  <p>具有隐藏层的神经网络</p>
                  <Visualization />
                </Card>
                <Card className="card">
                  <h3>卷积神经网络</h3>
                  <p>用于图像处理的深度学习模型</p>
                  <Visualization />
                </Card>
                <Card className="card">
                  <h3>循环神经网络</h3>
                  <p>处理序列数据的神经网络</p>
                  <Visualization />
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'evaluation' && (
            <div className="model-evaluation">
              <div className="grid">
                <Card className="card">
                  <h3>准确率与精确率</h3>
                  <p>评估分类模型性能的指标</p>
                  <Visualization />
                </Card>
                <Card className="card">
                  <h3>召回率与F1分数</h3>
                  <p>综合评估分类模型的指标</p>
                  <Visualization />
                </Card>
                <Card className="card">
                  <h3>ROC曲线</h3>
                  <p>评估分类模型性能的图形方法</p>
                  <Visualization />
                </Card>
                <Card className="card">
                  <h3>交叉验证</h3>
                  <p>评估模型泛化能力的方法</p>
                  <Visualization />
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;