<?php
// Example feature test for roles endpoints
use Tests\TestCase;

class RoleEndpointTest extends TestCase
{
    public function testGetAllRoles()
    {
        $response = $this->get('/api/roles');
        $response->assertStatus(200);
        $response->assertJsonStructure([
            '*' => ['role_id', 'role_name', 'role_description']
        ]);
    }

    // Add more tests for other endpoints
}
