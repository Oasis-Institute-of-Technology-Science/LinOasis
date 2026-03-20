import React, { useState } from 'react';
import Card from '../components/Card';
import Visualization from '../components/Visualization';

const LinearAlgebra = () => {
  const [activeTab, setActiveTab] = useState('vectors');

  const tabs = [
    { id: 'vectors', label: 'Vectors & Matrices' },
    { id: 'transformations', label: 'Linear Transformations' },
    { id: 'operations', label: 'Matrix Operations' },
    { id: 'eigen', label: 'Eigenvalues & Eigenvectors' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-bg-dark to-bg-medium">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
            Linear Algebra <span className="text-accent-blue">Basics</span>
          </h1>
          <p className="text-xl text-center text-gray mb-12 max-w-3xl mx-auto">
            Build intuition through interactive visualizations of core linear algebra concepts
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 bg-dark">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === tab.id 
                  ? 'bg-accent-blue text-white' 
                  : 'bg-medium text-gray hover:bg-gray-dark'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-12">
            {/* Vectors & Matrices */}
            {activeTab === 'vectors' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-accent-blue mb-6">Vectors & Matrices</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card variant="elevated">
                    <h3 className="text-xl font-bold text-white mb-4">What are Vectors?</h3>
                    <p className="text-gray mb-4">
                      Vectors are mathematical objects that have both magnitude and direction. They can be represented as arrows in space.
                    </p>
                    <p className="text-gray">
                      In linear algebra, vectors are often represented as column matrices and are fundamental building blocks for more complex operations.
                    </p>
                  </Card>
                  <Visualization>
                    <div className="bg-medium p-8 h-80 flex items-center justify-center">
                      <div className="text-2xl text-gray">Interactive vector visualization will appear here</div>
                    </div>
                  </Visualization>
                </div>
              </div>
            )}

            {/* Linear Transformations */}
            {activeTab === 'transformations' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-accent-blue mb-6">Linear Transformations</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card variant="elevated">
                    <h3 className="text-xl font-bold text-white mb-4">What are Linear Transformations?</h3>
                    <p className="text-gray mb-4">
                      Linear transformations are functions that map vectors to vectors while preserving the operations of vector addition and scalar multiplication.
                    </p>
                    <p className="text-gray">
                      Common linear transformations include scaling, rotation, and projection, which can be represented by matrices.
                    </p>
                  </Card>
                  <Visualization>
                    <div className="bg-medium p-8 h-80 flex items-center justify-center">
                      <div className="text-2xl text-gray">Interactive transformation visualization will appear here</div>
                    </div>
                  </Visualization>
                </div>
              </div>
            )}

            {/* Matrix Operations */}
            {activeTab === 'operations' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-accent-blue mb-6">Matrix Operations</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card variant="elevated">
                    <h3 className="text-xl font-bold text-white mb-4">Matrix Operations</h3>
                    <p className="text-gray mb-4">
                      Matrices support various operations including addition, multiplication, and inversion.
                    </p>
                    <p className="text-gray">
                      Matrix multiplication is particularly important as it represents the composition of linear transformations.
                    </p>
                  </Card>
                  <Visualization>
                    <div className="bg-medium p-8 h-80 flex items-center justify-center">
                      <div className="text-2xl text-gray">Interactive matrix operations will appear here</div>
                    </div>
                  </Visualization>
                </div>
              </div>
            )}

            {/* Eigenvalues & Eigenvectors */}
            {activeTab === 'eigen' && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-accent-blue mb-6">Eigenvalues & Eigenvectors</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card variant="elevated">
                    <h3 className="text-xl font-bold text-white mb-4">What are Eigenvalues and Eigenvectors?</h3>
                    <p className="text-gray mb-4">
                      An eigenvector of a linear transformation is a non-zero vector that changes only in scale when the transformation is applied.
                    </p>
                    <p className="text-gray">
                      The eigenvalue is the scalar factor by which the eigenvector is scaled.
                    </p>
                  </Card>
                  <Visualization>
                    <div className="bg-medium p-8 h-80 flex items-center justify-center">
                      <div className="text-2xl text-gray">Interactive eigenvector visualization will appear here</div>
                    </div>
                  </Visualization>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinearAlgebra;
