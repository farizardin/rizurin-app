import apiClient from '../api/apiClient';
import API_CONFIG from '../api/config';

class ProjectService {
    async getHomelabProjects() {
        try {
            const response = await apiClient.get(API_CONFIG.ENDPOINTS.PROJECT_HOMELAB);
            return response.data.data;
        } catch (error) {
            console.error('Failed to fetch homelab projects:', error);
            throw error;
        }
    }
}

const projectService = new ProjectService();
export default projectService;
