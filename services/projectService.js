export default function useProjectService() {
    const { $axios } = useNuxtApp();
  
    const getProjects = async () => {
      try {
        const response = await $axios.get('/projects');
        return response.data;
      } catch (error) {
        throw new Error('Error fetching projects');
      }
    };
  
    const getProjectById = async (id) => {
      try {
        const response = await $axios.get(`/projects/${id}`);
        return response.data;
      } catch (error) {
        throw new Error('Error fetching project');
      }
    };
  
    const createProject = async (projectData) => {
      try {
        const response = await $axios.post('/projects', projectData);
        return response.data;
      } catch (error) {
        throw new Error('Error creating project');
      }
    };
  
    const updateProject = async (id, projectData) => {
      try {
        const response = await $axios.put(`/projects/${id}`, projectData);
        return response.data;
      } catch (error) {
        throw new Error('Error updating project');
      }
    };
  
    const deleteProject = async (id) => {
      try {
        await $axios.delete(`/projects/${id}`);
      } catch (error) {
        throw new Error('Error deleting project');
      }
    };
  
    return {
      getProjects,
      getProjectById,
      createProject,
      updateProject,
      deleteProject,
    };
  }
  