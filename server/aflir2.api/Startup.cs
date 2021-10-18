using aflir2.api.Data;
using aflir2.api.Exceptions.Middleware;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace server
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            // Will scan the assemble in order to find all objects implementing MediatR interfaces.
            services.AddCors(o => o.AddPolicy("CorsPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));


            var afliConfig = new AfliConfiguration();
            Configuration.Bind("AfliConfiguration", afliConfig);      //  <--- This

            services.AddDbContext<Aflir2DbContext>(opt => opt.UseSqlServer(Configuration["AfliConfiguration:ConnectionStrings:afliDb"]));
            services.AddTransient<IPersonRepository, PersonRepository>();

            services.AddTransient<GenericExceptionMiddleware>();
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "server", Version = "v1" });
            });


            services.AddMediatR(typeof(Startup).Assembly);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "server v1"));
            }

    
            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseMiddleware<GenericExceptionMiddleware>();

            app.UseCors(builder => builder
               .AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader());



            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }


    public class AfliConfiguration
    {
        public AfliConnectionStrings ConnectionStrings { get; set; }
    }

    public class AfliConnectionStrings
    {
        public string afliDb { get; set; }
        public string LogDb { get; set; }
        public string IdentityDb { get; set; }
    }

}
