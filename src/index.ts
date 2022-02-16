import vtkConeSource from '@kitware/vtk.js/Filters/Sources/ConeSource';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';

const coneSource = vtkConeSource.newInstance();
const mapper = vtkMapper.newInstance();
mapper.setInputConnection(coneSource.getOutputPort());
