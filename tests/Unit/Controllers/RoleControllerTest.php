<?php
// Example unit test for RoleController
use Tests\TestCase;
use App\Http\Controllers\RoleController;
use Illuminate\Http\Request;

class RoleControllerTest extends TestCase
{
    public function testIndex()
    {
        $controller = new RoleController();
        $response = $controller->index(new Request());
        $this->assertIsArray($response->toArray());
    }

    // Add more tests for other controller methods
}
